<template>
    <v-content>
        <v-container>
            <template v-if="posts.data">
                <v-row class="d-flex justify-center">
                    <v-col cols="12" md="8" class="mt-6">

                            <v-row align="center" justify="center">
                                <v-col class="text-center" cols="12" md="8">
                                    <v-card>
                               <v-img
                               src="/img/friends.jpg"
                               class="white--text align-center"
                               gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                               >
                                   <v-card-text class="title font-weight-black white--text mx-auto">
                                       <span>
                                       نوشته های جدید دوستان شما
                                       </span>
                                   </v-card-text>
                               </v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                    <v-col cols="12" md="8">
                        <new-post v-for="post in posts.data"
                                  :key="post.id"
                                  :data="post"
                                  class="mt-10"
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
                        <span v-if="!posts.data.length">فعلا نوشته جدیدی وجود ندارد.</span>
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

    </v-content>
</template>

<script>
    import { ref } from "@vue/composition-api";
    import NewPost from "../../components/posts/NewPost";
    import ShowCategorySkeletonLoader from "../../components/posts/ShowCategorySkeletonLoader";
    export default {
        name: "UsrerFriendPost",
        components: {ShowCategorySkeletonLoader, NewPost},
        metaInfo: {
            title: 'نوشته های جدید دوستان - '
        },
        setup(){
            //state
            const posts=ref({});

            //methods
            const fetchNextPosts=()=>{
                axios.get(posts.value.next_page_url)
                    .then(({ data }) => {
                        posts.value.data.push(...data.posts.data);
                        posts.value.next_page_url = data.posts.next_page_url;
                    });
            };


            //hook
            axios.get(`/api/user-friend-posts`)
                .then(({ data }) => {
                    posts.value = data.posts;
                });


            return{
                posts,
                fetchNextPosts
            }
        },
    }
</script>

<style scoped>

</style>
