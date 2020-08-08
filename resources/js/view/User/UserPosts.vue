<template>
    <v-content>
        <v-container class="mt-12">
            <template v-if="posts.data">
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8" class="d-flex">
                    <div class="align-center justify-center">
                        <v-list-item>
                            <router-link
                                :to="{ name: 'user-posts', params: { username: user.username } }"
                            >
                                <v-list-item-avatar size="165">
                                    <v-avatar size="165">

                                        <v-img :src="user.profile_src || '/img/avatar.png'"
                                        ></v-img>

                                    </v-avatar>
                                </v-list-item-avatar>
                            </router-link>
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold">
                                    <v-btn
                                        text
                                        class="font-weight-black"
                                    >
                                        {{user.name}}
                                    </v-btn>

                                    <v-btn
                                        :color="user.is_follows? 'success' : 'info'"
                                        rounded
                                        v-if=" $store.state.isLoggedIn &&
                                            $store.state.user.id != user.id"
                                        dark
                                        small
                                        class="hidden-sm-and-down darken-2 px-5 mt-3 mr-3 mb-3"
                                        @click="followUser"
                                    >{{user.is_follows ? 'دنبال میکنید' : 'دنبال کردن'}}
                                        &nbsp;
                                        <v-icon small>
                                            {{user.is_follows? 'mdi-check-outline':'mdi-plus'}}
                                        </v-icon>
                                    </v-btn>
                                </v-list-item-title>
                                <v-list-item-subtitle class="caption grey--text">
                                    <p class="hidden-md-and-up">
                                        <v-btn :color="user.is_follows? 'success' : 'info'"
                                               rounded
                                               v-if=" $store.state.isLoggedIn &&
                                            $store.state.user.id != user.id"
                                               dark
                                               small
                                               class="darken-2 px-5 mt-3 mr-3 mb-3"
                                               @click="followUser"
                                        >{{user.is_follows ? 'دنبال میکنید' : 'دنبال کردن'}}
                                            &nbsp;
                                            <v-icon small>
                                                {{user.is_follows? 'mdi-check-outline':'mdi-plus'}}
                                            </v-icon>
                                        </v-btn>

                                    </p>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-col>
            </v-row>
                <v-row class="justify-center d-flex text-center">
                    <v-col cols="12" md="8">
                                <span class="body-2 grey--text mx-auto">
                                {{user.bio}}
                                </span>
                    </v-col>
                </v-row>
                <v-row class="justify-center d-flex">
                    <v-col cols="12" md="8" class="d-flex" v-if="$vuetify.breakpoint.mdAndUp">
                        <v-btn small text class="info--text"
                               @click="goToFriends('followers',user.username)"
                        >
                            توسط <span class="font-weight-bold">{{user.followers_count}}</span> نفر دنبال می‌شود
                        </v-btn>
                        <v-btn small text class="mr-3 info--text"
                               @click="goToFriends('following',user.username)"
                        ><span class="font-weight-bold">{{user.follows_count}}</span> نفر را دنبال می‌کند
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                        color="info"
                        v-if="$store.state.isLoggedIn  && $store.state.user.id==user.id"
                        :to="{name: 'profile'}"
                        >
                            تنظیمات حساب
                            <v-icon>mdi-cog-outline</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="8" v-if="$vuetify.breakpoint.smAndDown">
                        <v-row class="justify-center d-flex mx-auto" >
                            <v-btn small text class="info--text"
                                   @click="goToFriends('followers',user.username)"
                            >توسط <span class="font-weight-bold">{{user.followers_count}}</span> نفر دنبال می‌شود
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn small text class="mr-3 info--text"
                                   @click="goToFriends('following',user.username)"
                            ><span class="font-weight-bold">{{user.follows_count}}</span> نفر را دنبال می‌کند
                            </v-btn>
                        </v-row>
                        <v-row class="justify-center d-flex text-center mt-5">
                            <v-btn
                                color="info"
                                v-if="$store.state.isLoggedIn  &&  $store.state.user.id==user.id"
                                :to="{name: 'profile'}"
                            >تنظیمات حساب<v-icon>mdi-cog-outline</v-icon>
                            </v-btn>
                        </v-row>

                    </v-col>
                </v-row>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8">
                    <p v-if="$store.state.isLoggedIn  && $store.state.user.id != user.id">{{ user.posts_count }} نوشته دارد: </p>
                    <p v-else-if="!$store.state.isLoggedIn">{{ user.posts_count }} نوشته دارد: </p>
                    <p v-else>{{ user.posts_count }} نوشته دارید: </p>
                    <new-post v-for="post in posts.data"
                              :key="post.id"
                              :data="post"
                              class="mt-10"
                              @mustLogin="function(data) {
                                mustLogin=data;
                              }"
                    ></new-post>
                    <div class="text-center">
                    <v-btn class="mt-10"
                           v-if="!! posts.next_page_url"
                           rounded
                           x-large dark
                           color="info"
                           @click="fetchNextPosts"
                    >ادامه&nbsp;<v-icon>mdi-contain-end</v-icon></v-btn>
                    </div>
                    <span v-if="!posts.data.length && $store.state.isLoggedIn  && $store.state.user.id == user.id">فعلا نوشته ای ندارید.</span>
                    <span v-else>فعلا نوشته ای ندارد.</span>
                    <br><br>
                </v-col>
            </v-row>
            </template>
            <template v-else>
                <v-row class="d-flex justify-center">
                <v-col cols="12" md="8">
                <show-post-skeleton-loader></show-post-skeleton-loader>
                </v-col>
                </v-row>
            </template>
        </v-container>

        <must-login-dialog
            :dialog="mustLogin.dialog"
            :message="mustLogin.message"
            @close="mustLogin.dialog=!mustLogin.dialog"
        ></must-login-dialog>

        <must-verify-dialog
            :dialog="mustVerifyDialog"
            @close="mustVerifyDialog=!mustVerifyDialog"
        ></must-verify-dialog>

    </v-content>
</template>

<script>
    import { ref } from "@vue/composition-api";
    import NewPost from "@/components/posts/NewPost";
    import ShowPostSkeletonLoader from "../../components/posts/ShowPostSkeletonLoader";
    import MustLoginDialog from "../../components/auth/MustLoginDialog";
    import MustVerifyDialog from "../../components/auth/mustVerifyDialog";
    export default {
        name: "UserPosts",

        components: {
            MustVerifyDialog,
            MustLoginDialog,
            ShowPostSkeletonLoader,
            NewPost
        },

        metaInfo() {
            return {
                title: `نوشته های کاربر ${this.user.name}`
            }
        },

        setup(props,{root}){

            const posts=ref({});
            const user=ref({});
            const mustLogin= ref({
                dialog:false,
                message:''
            });
            const mustVerifyDialog=ref(false);

            //methods

            const fetchNextPosts=()=>{
                axios.get(posts.value.next_page_url)
                    .then(({ data }) => {
                        posts.value.next_page_url = data.posts.next_page_url;
                        posts.value.data.push(...data.posts.data);
                    });
            };

           const followUser=()=>{
                axios.post(`/api/follows/${user.value.username}`)
                    .then(() => {
                        user.value.is_follows = !user.value.is_follows;
                    })
            };

           const goToFriends=(type,username)=>{
             if(root.$store.state.isLoggedIn && root.$store.state.user.isVerified=='2'){
                 root.$router.push({
                     name: 'user-friends',
                     params: { username: username , type: type }
                 })
             }else{
                 mustVerifyDialog.value=true;
             }
           };

            //hook
            axios.get(`/api/user-posts/${root.$route.params.username}`)
                .then(({ data }) => {
                    user.value = data.user;
                    posts.value = data.posts;
                });


            return{
                posts,
                user,
                mustLogin,
                mustVerifyDialog,
                fetchNextPosts,
                goToFriends,
                followUser
            }
        },

    }
</script>

<style scoped>

</style>
