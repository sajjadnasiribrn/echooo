<template>

    <v-content>

        <v-container class="mt-md-8">
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8">
                    <template v-if="post.user">
                        <v-list-item>
                            <router-link
                                :to="{ name: 'user-posts', params: { username: post.user.username } }"
                                >
                            <v-list-item-avatar size="80">
                                <v-avatar size="80">

                                    <v-img :src="post.user.profile_src || '/img/avatar.png'"
                                    ></v-img>

                                </v-avatar>
                            </v-list-item-avatar>
                            </router-link>
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold">
                                    <v-btn
                                        :to="{ name: 'user-posts', params: { username: post.user.username } }"
                                        text
                                        class="font-weight-black"
                                    >
                                    {{post.user.name}}
                                    </v-btn>

                                    <v-btn
                                        :color="post.user.is_follows? 'success' : 'info'"
                                           rounded
                                           v-if=" $store.state.isLoggedIn &&
                                            $store.state.user.id != post.user.id"
                                           dark
                                           small
                                           class="hidden-sm-and-down darken-2 px-5 mt-3 mr-3 mb-3"
                                           @click="followUser"
                                    >{{post.user.is_follows ? 'دنبال میکنید' : 'دنبال کردن'}}
                                        &nbsp;
                                        <v-icon small>
                                            {{post.user.is_follows? 'mdi-check-outline':'mdi-plus'}}
                                        </v-icon>
                                    </v-btn>
                                </v-list-item-title>
                                <v-list-item-subtitle class="body-2 grey--text">
                                <span>
                                {{post.user.bio}}
                                </span>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="caption grey--text">
                                <span>
                                {{ moment(post.created_at).fromNow() }} / خواندن {{ post.min_read }} دقیقه
                                </span>
                                    <p class="hidden-md-and-up">
                                        <v-btn :color="post.user.is_follows? 'success' : 'info'"
                                               rounded
                                               v-if=" $store.state.isLoggedIn &&
                                            $store.state.user.id != post.user.id"
                                               dark
                                               small
                                               class="darken-2 px-5 mt-3 mr-3 mb-3"
                                               @click="followUser"
                                        >{{post.user.is_follows ? 'دنبال میکنید' : 'دنبال کردن'}}
                                            &nbsp;
                                            <v-icon small>
                                                {{post.user.is_follows? 'mdi-check-outline':'mdi-plus'}}
                                            </v-icon>
                                        </v-btn>

                                    </p>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>


                        <div class="my-5">
                            <h1 class="display-1 font-weight-bold">{{ post.title }}</h1>
                        </div>

                        <div class="mt-10" align="center" justify="center"
                             v-if="post.image!='/img/posts/none'"
                        >
                            <v-img :src="post.image"
                            ></v-img>
                        </div>

                        <div class="subtitle mt-8 mx-4 body-text real-table" v-html="post.content">
                        </div>


                        <div class="my-10">
                            <v-btn depressed
                                   v-for="category in post.categories"
                                   :key="category.slug"
                                   class="mr-3 mt-2"
                                   :to="{ name: 'post-category', params: { slug: category.slug } }"
                            >{{ category.title }}
                            </v-btn>
                        </div>

                        <v-row class="d-flex flex-row mb-5 text-center">
                            <v-col cols="4">
                                <v-btn
                                    @click="likePost"
                                icon
                                >
                                <v-badge
                                    :content="post.likes_count==0? '0':post.likes_count"
                                    color="red darken-1"
                                >
                                    <v-icon
                                        :class="{ 'red--text': post.is_liked }"
                                    >
                                        {{ post.is_liked ? 'mdi-heart' : 'mdi-heart-outline' }}
                                    </v-icon>
                                </v-badge>
                                </v-btn>
                            </v-col>
                            <v-col cols="4">
                                <v-btn
                                @click="$vuetify.goTo('#firstComment',options)"
                                icon
                                >
                                <v-badge
                                    :content="post.comments_count>0? post.comments_count : '0'"
                                    color="cyan darken-1"
                                    bordered
                                >
                                    <v-icon>mdi-comment-outline</v-icon>
                                </v-badge>
                                </v-btn>
                            </v-col>
                            <v-col cols="4">
                                <v-btn
                                    @click="bookmarkPost(post)"
                                    icon
                                >
                                <v-badge
                                    content="ذخیره"
                                    color="blue-grey darken-3"
                                >
                                    <v-icon>
                                        {{ post.is_bookmarked ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}
                                    </v-icon>
                                </v-badge>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row class="d-flex flex-row mb-5 text-center">
                            <v-col cols="12">
                            <v-icon>mdi-telegram</v-icon>
                            <v-btn outlined
                                   rounded
                                   class="mr-3"
                                   v-clipboard:copy="short_link"
                                   v-clipboard:success="onCopyShortLink"
                                   :disabled="short_link === 'کپی شد.'"
                            >{{ short_link }}
                            </v-btn>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>
                        <div class="mt-12" v-if="related_posts.length>0">
                            <p class="body-2 font-weight-bold">شاید از این نوشته‌ها هم خوشتان بیاید:</p>
                            <v-container fluid>
                                <v-row>
                                    <v-slide-group
                                        v-model="model"
                                        active-class="success"
                                        show-arrows
                                    >
                                        <v-slide-item v-for="(related_post,i) in related_posts" :key="i"
                                                      v-slot:default="{active,toggle}"
                                        >
                                            <RelatedPost
                                                :related_post="related_post"
                                                @click="function(event) { bookmarkPost(event); }"
                                            >
                                            </RelatedPost>
                                        </v-slide-item>
                                    </v-slide-group>
                                </v-row>
                            </v-container>
                        </div>
                        <div class="mt-12">
                            <p class="font-weight-bold">دیدگاه ها:</p>
                            <v-form v-if=" $store.state.isLoggedIn ">

                                <TiptapComment
                                    class="mr-3"
                                    v-model="comment.content"
                                    ref="tiptap"
                                ></TiptapComment>
                                <v-row>
                                    <v-checkbox
                                        v-model="comment.type"
                                        color="red darken-3"
                                        class="shrink mr-2 mt-0"
                                    ></v-checkbox>
                                    <v-btn
                                        small
                                        :disabled="!comment.type"
                                        @click="comment.type = false"
                                        text
                                    >
                                        <v-icon
                                            color="red darken-3"
                                        >
                                            mdi-shield-key
                                        </v-icon>
                                        &nbsp;
                                        خصوصی ( قابل دیدن فقط برای شما و نویسنده )
                                    </v-btn>
                                </v-row>
                                <v-row>
                                    <v-spacer></v-spacer>
                                    <v-btn class="ml-5 mb-3"
                                           :color="commentButtonColor"
                                           large
                                           rounded
                                           :disabled="commentButtonColor === 'disable'"
                                           @click="saveComment"
                                    >
                                        {{ commentButtonContent }}
                                    </v-btn>

                                </v-row>

                            </v-form>
                            <template v-else>
                                <v-alert
                                    text
                                    prominent
                                    type="info"
                                    icon="mdi-alert"
                                >
                                    <v-row
                                        align="center"
                                        no-gutters
                                    >
                                        <v-col class="flex-row">

                                            برای ارسال نظر ابتدا باید وارد حساب کاربری خود شوید.
                                        </v-col>

                                        <v-col class="shrink d-flex flex-row">
                                            <v-btn
                                                color="info"
                                                outlined
                                                small
                                                rounded
                                                class="ml-2 mr-3"
                                                @click="loginForCommentDialog"
                                            >
                                                ورود
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-alert>
                            </template>
                        </div>
                        <template
                            v-if=" $store.state.isLoggedIn &&
                $store.state.user.id == post.user.id"
                        >
                            <PostSpeedDialog
                                :slug="post.slug"
                            ></PostSpeedDialog>
                        </template>
                        <template v-else>
                        <v-bottom-navigation
                            background-color="deep-orange lighten-4"
                            color="red"
                            fixed
                            hide-on-scroll
                        >
                                    <v-btn
                                        @click="likePost"
                                        icon
                                    >
                                        <span

                                            class="red--text"
                                            color="red darken-1"
                                        >
                                            {{ post.likes_count==0? '0':post.likes_count }}
                                        </span>
                                        <v-icon
                                            class="red--text"
                                            :class="{ 'red--text': post.is_liked }"
                                        >
                                            {{ post.is_liked ? 'mdi-heart' : 'mdi-heart-outline' }}
                                        </v-icon>
                                    </v-btn>

                                    <v-btn
                                        @click="$vuetify.goTo('#firstComment',options)"
                                        icon
                                    >
                                        <span class="info--text">
                                            {{ post.comments_count>0? post.comments_count : '0' }}
                                        </span>
                                        <v-icon class="info--text">mdi-comment-outline</v-icon>
                                    </v-btn>

                                    <v-btn
                                        @click="bookmarkPost(post)"
                                        icon
                                    >
                                        <span
                                            class="success--text"
                                        >
                                            ذخیره
                                        </span>
                                        <v-icon
                                            class="success--text"info
                                        >
                                            {{ post.is_bookmarked ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}
                                        </v-icon>
                                    </v-btn>


                        </v-bottom-navigation>
                        </template>
                    </template>
                    <template v-else>
                        <show-post-skeleton-loader></show-post-skeleton-loader>
                    </template>

                    <h3 id="firstComment"
                    ></h3>

                    <h4 v-for="comment in post.parent_comments"
                         :key="comment.id"
                         :id="'c'+comment.id"
                    >
                    <PostComments
                        class="mt-10"
                        :data="comment"
                        :writerId="post.user.id"
                        :commentColor="commentColor[comment.id%6]"
                    ></PostComments>
                    </h4>
                </v-col>
            </v-row>

        </v-container>
        <v-snackbar v-model="error.show"
                    top
                    color="red lighten-1"
        >
            {{ error.message }}
        </v-snackbar>
        <v-snackbar v-model="successDelete.show"
                    top
                    color="success"
                    :timeout="1500"
        >
            {{ successDelete.message }}
        </v-snackbar>
        <must-login-dialog
        :dialog="mustLogin.dialog"
        :message="mustLogin.message"
        @close="mustLogin.dialog=!mustLogin.dialog"
        ></must-login-dialog>
    </v-content>

</template>

<script>
    import {computed, ref} from '@vue/composition-api';
    import ShowPostSkeletonLoader from "../../components/posts/ShowPostSkeletonLoader";
    import RelatedPost from "../../components/posts/RelatedPost";
    import PostComments from "../../components/posts/PostComments";
    import EventBus from "../../service/EventBus";
    import TiptapComment from "../../components/posts/TiptapComment";
    import MustLoginDialog from "../../components/auth/MustLoginDialog";
    import PostSpeedDialog from "../../components/posts/PostSpeedDialog";

    moment.loadPersian({
        usePersianDigits: true
    });

    export default {
        name: "PostShowُ",
        components: {PostSpeedDialog, MustLoginDialog, TiptapComment, PostComments, RelatedPost, ShowPostSkeletonLoader},
        metaInfo() {
            return {
                title: this.post.title,
                meta: [
                    {name: 'description', content: this.post.description}
                ]
            }
        },
        setup(props, {root,refs}) {
            // state
            const flashBotton=ref(false);

            const mustLogin=ref({
               dialog:false,
               message:''
            });
            const successDelete = ref({
                show: false,
                message: null
            });
            const options=ref({
                duration: 900,
                offset: 400,
                easing: 'linear',
            });
            const commentColor = ref([
                'purple lighten-5',
                'green lighten-5',
                'blue-grey lighten-5',
                'grey lighten-3',
                'brown lighten-5',
                'cyan lighten-5',
            ]);
            const commentButtonContent = ref('ارسال نظر');
            const commentButtonColor = ref('info');
            const short_link = ref('');
            const model = ref(null);
            const post = ref({});
            const related_posts = ref({});
            const comment = ref({
                content: '',
                type: false,
                post_id: null
            });
            const error = ref({
                show: false,
                message: null
            });


            const url = computed(() => {
                return process.env.MIX_APP_URL + '/';
            });




            const onCopyShortLink = () => {
                const link = short_link.value;
                short_link.value = 'کپی شد.';
                setTimeout(() => {
                    short_link.value = link;
                }, 1000);
            };

            const saveComment = () => {
                commentButtonContent.value = 'در حال ارسال...';
                commentButtonColor.value = 'disable';
                axios.post(`/api/comments/${post.value.slug}`, comment.value)
                    .then(({data}) => {
                        comment.value.content = '';
                        EventBus.$emit('setContent', '');
                        commentButtonContent.value = 'نظر شما با موفقیت ارسال شد.';
                        commentButtonColor.value = 'success';
                        setTimeout(() => {
                            commentButtonContent.value = 'ارسال نظر';
                            commentButtonColor.value = 'info';
                        }, 1000);
                    }).catch(({response}) => {
                    showErrorSnackbar(response.data.errors.content[0]);
                    commentButtonContent.value = 'ارسال نظر';
                    commentButtonColor.value = 'info';
                })
            };

            const showErrorSnackbar = (message) => {
                error.value.show = true;
                error.value.message = message;
            };

            const showSuccessDeleteSnackbar = (message) => {
                successDelete.value.show = true;
                successDelete.value.message = message;
            };

            const bookmarkPost = (postModel) => {
                if (root.$store.state.isLoggedIn) {
                    postModel.is_bookmarked = !postModel.is_bookmarked;
                    let reqType = postModel.is_bookmarked ? 'post' : 'delete';
                    axios[reqType](`/api/bookmarks/${postModel.slug}`)
                }else{
                    mustLogin.value.message='برای ذخیره این نوشته به حساب خود وارد شوید';
                    mustLogin.value.dialog=true;
                }
            };

            const likePost = () => {
                if (root.$store.state.isLoggedIn) {
                    post.value.is_liked = !post.value.is_liked;
                    post.value.is_liked ? post.value.likes_count++ : post.value.likes_count--;
                    let reqType = post.value.is_liked ? 'post' : 'delete';
                    axios[reqType](`/api/likes/${post.value.slug}`)
                        .then(() => {
                            //post.value.is_liked ? post.value.likes_count++ : post.value.likes_count--;
                        })
                }else{
                    mustLogin.value.message='برای پسندیدن این نوشته به حساب خود وارد شوید';
                    mustLogin.value.dialog=true;
                }
            };

            const followUser = () => {
                axios.post(`/api/follows/${post.value.user.username}`)
                    .then(() => {
                        post.value.user.is_follows = !post.value.user.is_follows;
                    })
            };

            const loginForCommentDialog=()=>{
                mustLogin.value.message='برای ارسال نظر به حساب خود وارد شوید';
                mustLogin.value.dialog=true;
            };

            // created hook

            axios.get(`/api/posts/${root.$route.params.slug}`)
                .then(({data}) => {
                    post.value = data.post;
                    related_posts.value = data.related_posts;
                    short_link.value = url.value + 'link/' + data.post.short_link;
                    comment.value.post_id = data.post.id;
                    firstComment.value=refs.firstOfComments;

                    Echo.channel(`echooo_comment_${data.post.id}`)
                        .listen('.comment.created', ({comment}) => {
                            post.value.parent_comments.push(comment);
                            EventBus.$emit('comment_created');
                            setTimeout(() => {
                                root.$vuetify.goTo(`#c${comment.id}`,options.value);
                            }, 300);

                        });

                    Echo.channel(`echooo_comment_${data.post.id}`)
                        .listen('CommentDeletedEvent', ({ comment }) => {
                            const findComment = post.value.parent_comments.find(c=>c.id==comment.id);
                            let index = post.value.parent_comments.indexOf(findComment);
                            post.value.parent_comments.splice(index, 1);
                            EventBus.$emit('comment_deleted');
                        });
                });


            EventBus.$on('error', (message) => {
                showErrorSnackbar(message);
            });

            EventBus.$on('successDelete', (message) => {
                showSuccessDeleteSnackbar(message);
            });

            EventBus.$on('comment_created', () => {
                post.value.comments_count++;
            });
            EventBus.$on('comment_deleted', () => {
                post.value.comments_count--;
            });


            return {
                flashBotton,
                mustLogin,
                successDelete,
                options,
                commentButtonContent,
                commentButtonColor,
                commentColor,
                error,
                short_link,
                post,
                related_posts,
                model,
                comment,
                followUser,
                loginForCommentDialog,
                likePost,
                bookmarkPost,
                onCopyShortLink,
                showErrorSnackbar,
                saveComment,
                moment
            }
        }
    }
</script>

<style lang="scss">
    .editor p.is-editor-empty:first-child::before {
        content: attr(data-empty-text);
        float: right;
        color: #ffd600;
        pointer-events: none;
        height: 0;
        font-style: italic;
    }

    .body-text {
        text-align: justify;
        line-height: 2.4rem;
    }

    .editor {
        position: relative;

        &__floating-menu {
            position: absolute;
            z-index: 1;
            margin-top: -0.25rem;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.2s, visibility 0.2s;

            &.is-active {
                opacity: 1;
                visibility: visible;
            }
        }
    }
</style>
