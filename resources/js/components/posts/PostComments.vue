<template>
    <div v-if="canShowComment">
        <v-card class="mx-auto"
                :color="commentColor"
                outlined
        >
            <div class="d-flex flex-row">
                <v-list-item>
                    <router-link
                        :to="{ name: 'user-posts', params: { username: comment.user.username } }"
                        >
                    <v-list-item-avatar>

                        <v-img :src="comment.user.profile_src"
                        ></v-img>

                    </v-list-item-avatar>
                    </router-link>
                    <v-list-item-content>
                        <v-list-item-title>
                            <v-btn
                            text
                            class="font-weight-black"
                            :to="{ name: 'user-posts', params: { username: comment.user.username } }"
                            >
                            {{ comment.user.name }}
                            </v-btn>
                            <v-icon
                            color="red darken-3"
                            v-if="data.type==2"
                            class="mr-3"
                            >
                                mdi-shield-key
                            </v-icon>
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ moment(comment.created_at).fromNow() }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-spacer></v-spacer>
                <v-icon class="pl-5"
                        v-if="canShowDelete"
                        @click="deleteDialogComment = true"
                >mdi-delete</v-icon>
                <v-icon class="pl-5"
                        v-if="canShowUpdate"
                        @click="showUpdateTextarea"
                >mdi-lead-pencil</v-icon>
                <v-icon class="pl-5"
                        v-if="$store.state.isLoggedIn"
                        @click="showReplyTextarea"
                >mdi-reply</v-icon>
            </div>

            <v-card-text class="black--text" v-html="comment.content">

            </v-card-text>
            <div class="mt-12" v-if="showReply || showUpdate">
                <p class="mr-3">{{ extandTitle }}</p>
                <div>
                <TiptapComment
                    v-model="reply.content"
                    ref="tiptap"
                    class="mr-2"
                ></TiptapComment>
                </div>

                <div class="d-flex flex-row mb-2 ml-2">
                    <v-spacer></v-spacer>
                    <v-btn color="red lighten-2"
                           large
                           rounded
                           @click="cancelReply"
                           class="ml-3"
                    >لغو</v-btn>
                    <v-btn
                           large
                           :color="replyButtonColor"
                           :disabled="replyButtonColor === 'disable'"
                           rounded
                           @click="saveComment"
                    >{{ replyButtonContent }}</v-btn>
                </div>
            </div>
        </v-card>
        <PostComments
            v-for="commentData in comment.replies"
            :key="commentData.id"
            :data="commentData"
            :writer="writerId"
            :commentColor="commentColor"
            class="mr-3 mt-3"
        >
        </PostComments>

        <v-dialog v-model="deleteDialogComment"
                  max-width="370px"
                  persistent
        >
            <v-card>
                <v-card-text class="pt-3">
                    <span class="title">
                        آیا از حذف این نظر مطمئن هستید؟
                    </span>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="deleteDialogComment = false">لغو</v-btn>
                    <v-btn @click="deleteComment"
                           :loading="loadingDelete"
                           color="error"
                    >تایید
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
    import {computed, ref} from "@vue/composition-api";
    import EventBus from "../../service/EventBus";
    import TiptapComment from "./TiptapComment";

    export default {
        name: "PostComments",
        components: {TiptapComment},
        props: {
            data: {
                type: Object
            },
            commentColor: {
                type: String
            },
            writerId:{
                type: Number
            }
        },

        setup(props, { root }) {
            // state
            const showUpdate=ref(false);
            const deleteDialogComment=ref(false);
            const loadingDelete=ref(false);
            const showReply = ref(false);
            const replyButtonContent=ref('ارسال پاسخ');
            const replyButtonColor=ref('info');
            const extandTitle=ref('پاسخ دادن به این نظر');
            const reply = ref({
                content: null,
                type: props.data.type,
                comment_id: props.data.id
            });
            const comment = ref(props.data);

            //COMPUTEDS
            const canShowDelete = computed(() => {
                return root.$store.state.isLoggedIn
                    && root.$store.state.user.id == props.data.user_id
                    ||
                    root.$store.state.isLoggedIn
                    && root.$store.state.user.id == props.writerId;
            });

            const canShowUpdate = computed(() => {
                return root.$store.state.isLoggedIn
                    && root.$store.state.user.id == props.data.user_id
            });

            const canShowComment = computed(() => {
                return (root.$store.state.isLoggedIn
                    && props.data.type==2
                    && (root.$store.state.user.id == props.data.user_id
                    ||
                     root.$store.state.user.id == props.writerId))
                    ||
                    props.data.type==1;
            });

            // methods
            const saveReply = () => {
                replyButtonContent.value='در حال ارسال...';
                replyButtonColor.value='disable';
                axios.post(`/api/replies/${root.$route.params.slug}`, reply.value)
                    .then(({ data }) => {
                        replyButtonContent.value = 'پاسخ شما با موفقیت ارسال شد.';
                        replyButtonColor.value = 'success';
                        setTimeout(() => {
                            commentButtonContent.value = 'ارسال پاسخ';
                            commentButtonColor.value = 'info';
                        }, 500);
                        cancelReply();
                    }).catch(({ response }) => {
                    EventBus.$emit('error', response.data.errors.content[0]);
                    replyButtonContent.value = 'ارسال پاسخ';
                    replyButtonColor.value = 'info';
                })
            };

            const cancelReply = () => {
                setTimeout(() => {
                reply.value.content = null;
                showReply.value = false;
                showUpdate.value = false;
            },400);
            };

            const deleteComment = () => {
                    loadingDelete.value = true;
                    axios.delete(`/api/comments/${comment.value.id}/${props.writerId}`)
                        .then(() => {
                            deleteDialogComment.value = false;
                            loadingDelete.value = false;
                            EventBus.$emit('successDelete', 'دیدگاه مورد نظر حذف شد.');
                        }).finally(() => {
                        loadingDelete.value = false;
                        deleteDialogComment.value = false;
                    })
            };

            const showReplyTextarea = () => {
                //EventBus.$emit('setContent','');
                showUpdate.value=false;
                showReply.value = false;
                root.$store.dispatch('setComment', '');
                extandTitle.value='پاسخ دادن به این نظر:';
                replyButtonContent.value='ارسال پاسخ';
                replyButtonColor.value='info';
                setTimeout(() => {
                    showReply.value = true;
                },100);
            };

            const showUpdateTextarea = () => {
                showUpdate.value=false;
                showReply.value=false;
                root.$store.dispatch('setComment', comment.value.content);
                extandTitle.value='ویرایش این نظر:';
                replyButtonContent.value='ویرایش نظر';
                replyButtonColor.value='info';
                setTimeout(() => {
                    showUpdate.value = true;
                },100);
            };

            const saveComment = () => {
                return showReply.value ? saveReply() : updateComment();
            };

            const updateComment = () => {
                replyButtonContent.value='در حال ویرایش...';
                replyButtonColor.value='disable';
                axios.patch(`/api/comments/${comment.value.id}`, reply.value)
                    .then(({ data }) => {
                        replyButtonContent.value = 'نظر شما با موفقیت ویرایش شد.';
                        replyButtonColor.value = 'success';
                        setTimeout(() => {
                            commentButtonContent.value = 'ویرایش نظر';
                            commentButtonColor.value = 'info';
                        }, 500);
                        cancelReply();
                        comment.value.content = data.data.content;
                    }).catch(({ response }) => {
                    EventBus.$emit('error', response.data.errors.content[0]);
                    replyButtonContent.value = 'ویرایش نظر';
                    replyButtonColor.value = 'info';
                })
            };

            //created_hook
            Echo.channel(`echooo_reply_${props.data.id}`)
                .listen('.reply.created', ({ reply }) => {
                    comment.value.replies.push(reply);
                    EventBus.$emit('comment_created');
                });
            Echo.channel(`echooo_reply_${props.data.id}`)
                .listen('CommentDeletedEvent', (event) => {
                    comment.value.replies = comment.value.replies.filter(c => c.id !== event.comment.id);
                    EventBus.$emit('comment_deleted');
                });


            return {
                extandTitle,
                showUpdate,
                loadingDelete,
                replyButtonColor,
                replyButtonContent,
                showReply,
                reply,
                comment,
                canShowDelete,
                canShowUpdate,
                canShowComment,
                deleteDialogComment,
                saveComment,
                showReplyTextarea,
                showUpdateTextarea,
                deleteComment,
                cancelReply,
                moment
            }
        }
    }
</script>

<style scoped>

</style>
