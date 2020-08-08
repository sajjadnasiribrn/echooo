<?php

namespace App\Http\Controllers\Comment;

use App\Comment;
use App\Events\CommentCreatedEvent;
use App\Events\CommentDeletedEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\CommentRequest;
use App\Notifications\PostCommentNotification;
use App\Post;
use App\User;
use Illuminate\Support\Facades\Event;


class CommentController extends Controller
{
    public function store(CommentRequest $request, Post $post)
    {
        $post->comments()->save(
            $comment = new Comment($request->only('content','type'))
        );

        $post->user->notify(
          new PostCommentNotification($post)
        );

        event(new CommentCreatedEvent(
            $comment->load(['user', 'post', 'replies', 'parent'])
        ));



        return response([
            'data' => $comment
        ], 200);
    }

    public function update(CommentRequest $request, Comment $comment)
    {
        $this->authorize('destroy', $comment);


        $comment->update(
            $request->only('content','type')
        );

        return response([
            'data' => $comment->load(['user', 'post', 'replies', 'parent'])
        ], 200);
    }

    public function destroy(Comment $comment, $writer_id)
    {
        if(auth('sanctum')->user()->id != $writer_id) {
            $this->authorize('destroy', $comment);
        }else{
            $this->authorize('writerDestroy', $comment);
        }

        Event::dispatch(new CommentDeletedEvent($comment));

        $comment->delete();

        return response([
            'data' => 'ok'
        ], 200);
    }
}
