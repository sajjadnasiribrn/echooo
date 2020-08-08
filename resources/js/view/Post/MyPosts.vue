<template>
    <v-content>
        <v-container>
            <v-row class="mb-12">
                <v-col cols="12">
                    <div class="mt-10 d-flex flex-row">
                        <span class="headline font-weight-bold">نوشته های شما</span>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="info"
                            outlined
                            :to="{ name: 'create-posts' }"
                        >
                            نوشتن پست جدید
                        </v-btn>
                    </div>

                    <v-tabs class="mt-5" color="grey darken-3" v-model="menu">
                        <v-tab href="#drafts"
                               @click="fetchAllDrafts"
                        >
                            پیش نویس ها
                            <template v-if="drafts_count">
                                ({{ drafts_count }})
                            </template>
                        </v-tab>
                        <v-tab href="#posts"
                               @click="fetchAllPosts"
                        >
                            مطالب منتشر شده
                            <template v-if="posts_count">
                                ({{ posts_count }})
                            </template>
                        </v-tab>
                    </v-tabs>
                    <v-divider></v-divider>

                    <v-tabs-items v-model="menu">
                        <v-tab-item value="drafts">
                            <template v-if='!isSuccess'>
                                <SkeletonLoader></SkeletonLoader>
                            </template>
                            <template v-else>
                                <v-col cols="12" class="mt-10" v-if="!drafts_count">
                                    <v-card
                                        class="mx-auto"
                                        flat
                                    >
                                        <v-card-text>
                                            <p class="title text--primary">
                                                پیش نویسی برای نمایش وجود ندارد.
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <div class="my-5" v-for="(draft, index) in drafts">
                                    <router-link class="title"
                                                 :to="{ name: 'update-draft', params: { link: draft.link } }"
                                    >
                                    <span>
                                    {{ draft.title || 'بدون عنوان' }}
                                    </span>
                                    </router-link>
                                    <div class="d-flex flex-row">
                                        <span class="body-2 grey--text">آخرین ویرایش: {{ draft.updated_at }}</span>
                                        <v-spacer></v-spacer>
                                        <router-link :to="{ name: 'update-draft', params: { link: draft.link } }">
                                            <v-icon class="info--text text--lighten-1 ml-5">mdi-file-document-edit
                                            </v-icon>
                                        </router-link>
                                        <v-icon class="red--text text--lighten-1"
                                                @click="openDeleteDraftDialog(index, draft.link, draft.title)"
                                        >mdi-delete
                                        </v-icon>
                                    </div>
                                    <v-divider class="mt-5"></v-divider>
                                </div>
                                <v-dialog v-model="deleteDialogDraft"
                                          max-width="370px"
                                          persistent
                                >
                                    <v-card>
                                        <v-card-text class="pt-3">
                                            <span class="title">
                                            {{ deletableTitle ? 'آیا از حذف پیش نویس "'+deletableTitle+'" مطمئن هستید؟'
                                                : 'آیا از حذف این پیش نویس مطمئن هستید؟' }}
                                            </span>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn @click="cancelDeleteDraft">بستن</v-btn>
                                            <v-btn @click="deleteDraft"
                                                   color="error"
                                            >تایید
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                        </v-tab-item>
                        <v-tab-item value="posts">
                            <template v-if='!isSuccess'>
                                <SkeletonLoader></SkeletonLoader>
                            </template>
                            <template v-else>
                                <v-col cols="12" class="mt-10" v-if="!posts_count">
                                    <v-card
                                        class="mx-auto"
                                        flat
                                    >
                                        <v-card-text>
                                            <p class="title text--primary">
                                                نوشته ای برای نمایش وجود ندارد.
                                            </p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <div class="my-5 mb-12" v-for="(post, index) in posts">
                                    <router-link class="title"
                                                 :to="{ name: 'post-show', params: { slug: post.slug } }"
                                    >
                                    <span>
                                        {{ post.title }}
                                    </span>
                                    </router-link>
                                    <div class="d-flex flex-row">
                                        <span class="body-2 grey--text">آخرین ویرایش: {{ post.updated_at }}</span>
                                        <v-spacer></v-spacer>
                                        <router-link
                                            :to="{ name:'edit-posts', params: { slug: post.slug } }"
                                        >
                                            <v-icon class="info--text text--lighten-1 ml-5">mdi-file-document-edit
                                            </v-icon>
                                        </router-link>
                                        <v-icon class="red--text text--lighten-1"
                                                @click="openDeletePostDialog(index, post.slug, post.title)"
                                        >mdi-delete
                                        </v-icon>
                                    </div>
                                    <v-divider class="mt-5"></v-divider>
                                </div>
                                <v-dialog v-model="deleteDialogPost"
                                          max-width="370px"
                                          persistent
                                >
                                    <v-card>
                                        <v-card-text class="pt-3">
                                            <span class="title">
                                            {{ deletableTitle ? 'آیا از حذف نوشته "'+deletableTitle+'" مطمئن هستید؟'
                                            : 'آیا از حذف این نوشته مطمئن هستید؟' }}
                                            </span>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn @click="cancelDeletePost">بستن</v-btn>
                                            <v-btn @click="deletePost"
                                                   color="error"
                                            >تایید
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import SkeletonLoader from "../../components/SkeletonLoader";
    import { reactive, toRefs, computed } from '@vue/composition-api';

    export default {
        name: "MyPosts",
        components: {SkeletonLoader},
        metaInfo: {
            title: 'نوشته های من -'
        },

        setup(props, { root }) {
            // state

            const data = reactive({
                deletableTitle: '',
                isSuccess: false,
                menu: null,
                deleteDialogDraft: false,
                deletableDraft: {},
                deleteDialogPost: false,
                deletablePost: {},
                drafts: computed(() => root.$store.state.drafts),
                drafts_count: computed(() => root.$store.state.drafts_count),
                posts: computed(() => root.$store.state.posts),
                posts_count: computed(() => root.$store.state.posts_count),
            });

            // methods
            const openDeleteDraftDialog = (index, link, title) => {
                data.deletableTitle=title;
                data.deleteDialogDraft = true;
                data.deletableDraft = { index, link };
            };
            const cancelDeleteDraft = () => {
                data.deleteDialogDraft = false;
                data.deletableDraft = {};
            };
            const deleteDraft = () => {
                root.$store.dispatch('deleteDraft', data.deletableDraft);
                data.deleteDialogDraft = false;
                data.deletableDraft = {};
            };


            const openDeletePostDialog = (index, slug, title) => {
                data.deletableTitle=title;
                data.deleteDialogPost = true;
                data.deletablePost = { index, slug };
            };
            const cancelDeletePost = () => {
                data.deleteDialogPost = false;
                data.deletablePost = {};
            };
            const deletePost = () => {
                root.$store.dispatch('deletePost', data.deletablePost);
                data.deleteDialogPost = false;
                data.deletablePost = {};
            };
            const fetchAllDrafts = () => {
                data.isSuccess=false;
                root.$store.dispatch('fetchAllDrafts')
                .then(()=>{
                    data.isSuccess=true;
                });

            };
            const fetchAllPosts = () => {
                data.isSuccess=false;
                root.$store.dispatch('fetchAllPosts')
                    .then(() => {
                        data.isSuccess = true;
                    });
            };

            // created hook
            fetchAllDrafts();

            return {
                ...toRefs(data),
                openDeleteDraftDialog,
                cancelDeleteDraft,
                deleteDraft,
                openDeletePostDialog,
                cancelDeletePost,
                deletePost,
                fetchAllDrafts,
                fetchAllPosts
            }
        },

    }
</script>

<style scoped>

</style>
