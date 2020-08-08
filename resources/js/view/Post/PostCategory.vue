<template>
    <v-content>
        <v-container>
            <template v-if="posts.data">
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8" class="mt-6">
                    <v-alert
                        class="align-center mt-8"
                        border="top"
                        outlined
                        color="red lighten-2"
                    >
                        <v-row class="justify-center">
                        <p class="mt-10">
                            <span class="caption">{{ category.posts_count }}</span>
                            <span class="caption"> نوشته در دسته بندی </span>
                            <span class="title font-weight-black">«{{ category.title }}»</span>
                            <span class="caption"> وجود دارد.</span>
                        </p>
                        </v-row>
                    </v-alert>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8">
                    <new-post v-for="post in posts.data"
                              :key="post.id"
                              :data="post"
                              class="mt-10"
                              @mustLogin="function(data) {
                                mustLogin=data;
                              }"
                    ></new-post>


                    <div class="text-center">
                    <v-btn class="mt-10 align-center"
                           v-if="!! posts.next_page_url"
                           rounded
                           x-large dark
                           color="info"
                           @click="fetchNextPosts"
                    >ادامه&nbsp;<v-icon>mdi-contain-end</v-icon></v-btn>
                    </div>
                    <span v-if="!posts.data.length">نوشته ای برای این دسته بندی وجود ندارد.</span>
                    <br><br><br><br>
                </v-col>
            </v-row>
            </template>
            <template v-else>
                <v-row class="d-flex justify-center">
                <v-col cols="8" class="mt-10">
                <ShowCategorySkeletonLoader></ShowCategorySkeletonLoader>
                </v-col>
                </v-row>
            </template>
        </v-container>

        <must-login-dialog
            :dialog="mustLogin.dialog"
            :message="mustLogin.message"
            @close="mustLogin.dialog=!mustLogin.dialog"
        ></must-login-dialog>

    </v-content>
</template>

<script>
    import { ref } from "@vue/composition-api";
    import NewPost from "../../components/posts/NewPost";
    import MustLoginDialog from "../../components/auth/MustLoginDialog";
    import ShowCategorySkeletonLoader from "../../components/posts/ShowCategorySkeletonLoader";
    export default {
        name: "PostCategory",
        components: {ShowCategorySkeletonLoader, MustLoginDialog, NewPost},

        metaInfo() {
            return {
                title: this.category.title + ' -'
            }
        },

        setup(props,{root}){
          //state
            const posts=ref({});
            const category=ref({});
            const mustLogin= ref({
                dialog:false,
                    message:''
            });

            //methods
           const fetchNextPosts=()=>{
                axios.get(posts.value.next_page_url)
                    .then(({ data }) => {
                        posts.value.data.push(...data.posts.data);
                        posts.value.next_page_url = data.posts.next_page_url;
                    });
            };


            //hook
            axios.get(`/api/posts/category/${root.$route.params.slug}`)
                .then(({ data }) => {
                    posts.value = data.posts;
                    category.value = data.category;
                });


            return{
                posts,
                category,
                mustLogin,
                fetchNextPosts
            }
        },

    }
</script>

<style scoped>

</style>
