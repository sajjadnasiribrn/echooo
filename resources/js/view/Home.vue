<template>
        <v-content>
            <v-container class="pt-md-6">
                <v-row>
                    <v-col cols="12" md="8">
                        <PopularWriter></PopularWriter>
                        <feature-posts></feature-posts>
                    </v-col>
                    <v-col cols="12" md="4" class="mt-md-11">
                        <Twitt></Twitt>
                    </v-col>
                    <v-col cols="12" class="hidden-md-and-up">
                        <template v-if="$store.state.isLoggedIn">
                            <following-posts :posts="followingPosts"></following-posts>
                            <v-divider class="my-4"></v-divider>
                        </template>
                        <v-banner sticky
                        >
                            <popular-posts :posts="popularPosts"></popular-posts>
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col cols="12" md="8">
                        <v-row
                            justify="space-around"
                            color="blue-grey accent-3"
                            dark
                            class="text-center"
                        >
                            <v-toolbar-title class="mr-7 amber--text">نوشته های جدید:</v-toolbar-title>
                        </v-row>
                        <NewPost v-for="post in posts.data"
                                 :key="post.slug"
                                 :data="post"
                                 @mustLogin="function(data) {
                                mustLogin=data;
                              }"
                        ></NewPost>
                        <div class="text-center">
                            <v-btn class="mt-10 align-center"
                                   v-if="!! posts.next_page_url"
                                   rounded
                                   x-large dark
                                   color="info"
                                   @click="fetchNextPosts"
                            >ادامه&nbsp;<v-icon>mdi-contain-end</v-icon></v-btn>
                        </div>
                        <br><br><br><br>
                    </v-col>
                    <v-col cols="4" class="hidden-sm-and-down">
                        <v-banner
                        :sticky="!$store.state.isLoggedIn"
                        >
                            <popular-posts :posts="popularPosts"></popular-posts>
                        </v-banner>
                        <template v-if="$store.state.isLoggedIn">
                        <v-banner sticky
                        >
                            <following-posts :posts="followingPosts"></following-posts>
                        </v-banner>
                        </template>
                    </v-col>
                </v-row>
            </v-container>
            <must-login-dialog
                :dialog="mustLogin.dialog"
                :message="mustLogin.message"
                @close="mustLogin.dialog=!mustLogin.dialog"
            ></must-login-dialog>
        </v-content>
</template>
<script>
    import RelatedPost from "../components/posts/RelatedPost";
    import Slider from "../components/Slider";
    import NewPost from "../components/posts/NewPost";
    import PopularWriter from "../components/posts/PopularWriter";
    import PopularPosts from "../components/posts/PopularPosts";
    import Twitt from "../components/posts/Twitt";
    import { ref } from '@vue/composition-api';
    import FollowingPosts from "../components/posts/FollowingPosts";
    import MustLoginDialog from "../components/auth/MustLoginDialog";
    import FeaturePosts from "../components/FeaturePosts";
    export default {
        name: "Home",
        metaInfo: {
            title: 'صفحه اصلی -',
        },
components:{
    FeaturePosts,
    MustLoginDialog,
    FollowingPosts,
    Twitt,
    PopularPosts,
    PopularWriter,
    NewPost,
    Slider,
    RelatedPost,
},

        setup(){
            //state
            const mustLogin= ref({
                dialog:false,
                message:''
            });
           const length=ref( 5);
               const onboarding=ref( 0);

               const posts=ref({});

               const popularPosts=ref({});

               const followingPosts=ref({});

               //methods
            const fetchNextPosts = () => {
                axios.get(posts.value.next_page_url)
                    .then(({ data }) => {
                        posts.value.data.push(
                            ...data.posts.data
                        );
                        posts.value.next_page_url = data.posts.next_page_url;
                    })
            };

            //hooks
            axios.get('/api/home')
                .then(({ data }) => {
                    posts.value = data.posts;
                });

            axios.get('/api/trending-posts')
                .then(({ data }) => {
                    popularPosts.value = data.posts;
                });

            axios.get('/api/following-posts')
                .then(({data})=>{
                    followingPosts.value=data.posts;
                });


            return{
                mustLogin,
                posts,
                length,
                onboarding,
                popularPosts,
                followingPosts,
                fetchNextPosts
            }
        },

    }

</script>

<style>
    .v-toolbar__content {
        padding: 0 !important;
    }
</style>
