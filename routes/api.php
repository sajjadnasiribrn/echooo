<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//USER
Route::post('/email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::post('/password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

Route::middleware('auth:sanctum','verified')->group(function () {

    Route::get('/me', function (Request $request) {
        return $request->user();
    })->withoutMiddleware('verified');

    Route::patch('/profile', 'UpdateProfileController@update')
        ->name('profile.update')->withoutMiddleware('verified');

    Route::post('/profile/upload-avatar/{oldProfile?}', 'UpdateProfileController@uploadAvatar')
        ->name('profile.upload.avatar')->withoutMiddleware('verified');

    Route::post('/upload-post-image/{draftLink?}', 'Post\UploadPostImageController')
        ->middleware('optimizeImages')
        ->name('upload_post_image');

    Route::post('/posts/create', 'Draft\DraftController@store')
        ->name('Draft.store');

    Route::get('/posts/{post:slug}/edit', 'Post\PostController@show')
        ->name('post.show');

    Route::patch('/posts/{post:slug}/edit', 'Post\PostController@edit')
        ->name('post.edit');

    Route::patch('/posts/{post:slug}', 'Post\PostController@update')
        ->name('post.update');

    Route::delete('/posts/{post:slug}', 'Post\PostController@destroy')
        ->name('post.destroy');



    Route::get('/drafts/{draft}', 'Draft\DraftController@show')
        ->name('Draft.show');

    Route::patch('/drafts/{draft}', 'Draft\DraftController@update')
        ->name('Draft.update');

    Route::delete('/drafts/{draft}', 'Draft\DraftController@destroy')
        ->name('Draft.destroy');

    Route::post('/posts', 'Post\PostController@store')
        ->name('post.store');

    Route::get('posts/all-posts', 'Post\AllUserPostsController');

    Route::get('posts/all-drafts', 'Post\AllUserDraftsController');

    Route::post('/comments/{post:slug}', 'Comment\CommentController@store')
        ->name('comment.store')
    ->withoutMiddleware('verified');

    Route::delete('/comments/{comment}/{writer_id}', 'Comment\CommentController@destroy')
        ->name('comment.destroy')
        ->withoutMiddleware('verified');

    Route::delete('/comments/{comment}/{writer_id}', 'Comment\CommentController@destroy')
        ->name('comment.destroy')
        ->withoutMiddleware('verified');

    Route::patch('/comments/{comment}', 'Comment\CommentController@update')
        ->name('comment.update')
        ->withoutMiddleware('verified');


    Route::post('/replies/{post:slug}', 'Comment\ReplyController@store')
        ->name('reply.store')
        ->withoutMiddleware('verified');

    Route::post('/bookmarks/{post:slug}', 'Post\BookmarkController@store')
        ->name('bookmark.store')
        ->withoutMiddleware('verified');
    Route::delete('/bookmarks/{post:slug}', 'Post\BookmarkController@destroy')
        ->name('bookmark.destroy')
        ->withoutMiddleware('verified');

    Route::post('/likes/{post:slug}', 'Post\LikeController@store')
        ->name('like.store')
        ->withoutMiddleware('verified');

    Route::delete('/likes/{post:slug}', 'Post\LikeController@destroy')
        ->name('like.destroy')
        ->withoutMiddleware('verified');

    Route::post('/follows/{user:username}', 'User\FollowController')
        ->name('follow')
        ->withoutMiddleware('verified');

    Route::get('/notifications', 'User\NotificationsController@index')
        ->name('notifications')
        ->withoutMiddleware('verified');

    Route::patch('/notifications/{notification}', 'User\NotificationsController@update')
        ->name('notifications.update')
        ->withoutMiddleware('verified');

    Route::get('/liked-posts', 'User\LikedPostController@index')
        ->name('liked.posts')
        ->withoutMiddleware('verified');

    Route::get('/bookmarked-posts', 'User\BookmarkedPostController@index')
        ->name('bookmarked.posts')
        ->withoutMiddleware('verified');

    Route::get('/following-posts', 'Post\FollowingPostController@index')
        ->name('following.posts')
        ->withoutMiddleware('verified');

    Route::get('/user-friend-posts', 'User\UserFriendPostController@index')
        ->name('userFriend.posts')
        ->withoutMiddleware('verified');

    Route::get('{user:username}/followers', 'User\UserFriendsController@followers')
        ->name('user-followers');

    Route::get('{user:username}/following', 'User\UserFriendsController@following')
        ->name('user-following');

});

Route::get('/home', 'HomePostController@index');

Route::get('/posts/category/{category:slug}', 'Post\PostCategoryController@index');


Route::get('/posts/{post:slug}', 'Post\ShowPostController')
    ->name('show-post');

Route::get('/navbar-categories','Category\NavbarCategoryController@index');

Route::get('/user-posts/{user:username}', 'User\UserPostController@index');

Route::get('/trending-posts', 'Post\TrendingPostController@index');

Route::get('/trending-writers', 'Post\TrendingWriterController@index');


Route::get('/search/posts', 'Search\SearchPostController@index');
Route::get('/search/users', 'Search\SearchUserController@index');
Route::get('/search/categories', 'Search\SearchCategoryController@index');

Route::get('/feature-posts', 'FeaturePostController@index');


//ADMIN
Route::prefix('admin')->namespace('Admin')->middleware(['auth:sanctum', 'has_role:admin|author'])->group(function () {

    Route::get('dashboard', 'DashboardController');

    Route::apiResource('users', 'UserController');
    Route::post('users/destroy', 'UserController@destroy');

    Route::get('posts', 'PostController@index');
    Route::post('posts/destroy', 'PostController@destroy');

    Route::get('drafts', 'DraftController@index');
    Route::post('drafts/destroy', 'DraftController@destroy');

    Route::apiResource('categories', 'CategoryController');
    Route::post('categories/destroy', 'CategoryController@destroy');

    Route::get('comments', 'CommentController@index');
    Route::post('comments/destroy', 'CommentController@destroy');

    Route::get('/feature-posts-search', 'FeaturePostSearchController@index');
    Route::get('/feature-posts', 'FeaturePostController@index');
    Route::post('/feature-post/{post:slug}', 'FeaturePostController@store');
    Route::delete('/feature-post/{post:slug}', 'FeaturePostController@destroy');


    Route::apiResource('roles', 'RoleController');
    Route::get('all-roles', 'AllRoleController@index');
});
