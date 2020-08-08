<?php

namespace App\Notifications;

use App\Post;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PostLikedNotification extends Notification implements ShouldQueue
{
    use Queueable;
    public $post;
    public $user;
    public $text;
    public $link;

    /**
     * Create a new notification instance.
     *
     * @param Post $post
     * @param User $user
     */
    public function __construct(Post $post,User $user)
    {
        $this->user=$user;
        $this->post=$post;
        $this->text = "نوشته «{$this->post->title}» توسط «{$this->user->name}» لایک شد.";
        $this->link = "/@{$this->user->username}";
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return !! $notifiable->email_on_like ? ['mail', 'database'] : ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('نوشته شما لایک شد!')
            ->line($this->text)
            ->action('لینک نوشته', $this->link );
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'text' => $this->text,
            'link' => $this->link,
        ];
    }
}
