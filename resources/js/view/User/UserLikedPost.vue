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
                            color="red darken-4"
                        >
                            <v-row class="justify-center">
                                <p class="mt-10">
                                    <span class="caption">{{ user.likes_count }}</span>
                                    <span class="caption"> نوشته را لایک کرده اید. </span>
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
                        <span v-if="!posts.data.length">هنوز نوشته ای را لایک نکرده اید.</span>
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
        name: "UserLikedPost",
        components: {ShowCategorySkeletonLoader, NewPost},

        metaInfo: {
            title: 'نوشته های لایک شده- '
        },

        setup(){
            //state
            const posts=ref({});
            const user=ref({});

            //methods
            const fetchNextPosts=()=>{
                axios.get(posts.value.next_page_url)
                    .then(({ data }) => {
                        posts.value.data.push(...data.posts.data);
                        posts.value.next_page_url = data.posts.next_page_url;
                    });
            };


            //hook
            axios.get(`/api/liked-posts`)
                .then(({ data }) => {
                    posts.value = data.posts;
                    user.value = data.user;
                });


            return{
                posts,
                user,
                fetchNextPosts
            }
        },
    }
</script>

<style scoped>

</style>
