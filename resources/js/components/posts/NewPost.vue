<template>
    <v-card
            class="mt-7"
    >
        <div class="d-flex flex-row">
            <v-list-item>
                <router-link
                    :to="{ name: 'user-posts', params: { username: data.user.username } }"
                >
                <v-list-item-avatar>
                    <v-img :src="data.user.profile_src"></v-img>
                </v-list-item-avatar>
                </router-link>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-btn
                        :to="{ name: 'user-posts', params: { username: post.user.username } }"
                        text
                        class="font-weight-black"
                    >
                        {{post.user.name}}
                    </v-btn>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ moment(data.created_at).fromNow() }} - خواندن {{ data.min_read }} دقیقه</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
        </div>

        <router-link
            class="white--text"
            :to="{ name: 'post-show', params: { slug: data.slug } }"
            v-if="data.image === '/img/posts/none'"
        >
        <v-sheet
            class="white--text"
            color="info"
            height="200px"
            tile
        >
            <v-card-text class="title font-weight-bold mx-auto">
                                                    <span class="mt-12">
                                                    {{ data.title }}
                                                    </span>
            </v-card-text>
        </v-sheet>
        </router-link>
        <v-img
            v-else
            class="white--text align-center"
            height="200px"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            :src="data.image"
        >
            <router-link :to="{ name: 'post-show', params: { slug: data.slug } }">
                <v-card-text class="title font-weight-bold white--text mx-auto">
                <span>
                    {{ data.title }}
                </span>
                </v-card-text>
            </router-link>
        </v-img>

        <v-card-text v-html="data.description">

        </v-card-text>

        <v-card-actions class="mt-2">
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
            <v-spacer></v-spacer>
            <v-btn
                class="ml-10"
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
        </v-card-actions>
    </v-card>
</template>

<script>
    import {ref} from "@vue/composition-api";

    moment.loadPersian({
        usePersianDigits: true
    });

    export default {
        name: "NewPost",
        props: {
            data: {
                type: Object,
                required: true
            }
        },

        setup(props,{root,emit}){
            //state
            const post=ref(props.data);
            const mustLogin=ref({
                dialog:false,
                message:''
            });

            //methods
            const likePost=()=>{
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
                    emit('mustLogin',mustLogin.value);
                }
            };
            const bookmarkPost=(postModel)=>{
                if (root.$store.state.isLoggedIn) {
                    postModel.is_bookmarked = !postModel.is_bookmarked;
                    let reqType = postModel.is_bookmarked ? 'post' : 'delete';
                    axios[reqType](`/api/bookmarks/${postModel.slug}`)
                }else{
                    mustLogin.value.message='برای ذخیره این نوشته به حساب خود وارد شوید';
                    mustLogin.value.dialog=true;
                    emit('mustLogin',mustLogin.value);
                }
            };

            return{
                moment,
                post,
                mustLogin,
                likePost,
                bookmarkPost

            }
        },
    }
</script>

<style scoped>

</style>
