<template>
    <v-content>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8" class="mt-8">
                    <v-text-field v-model="search"
                                  placeholder="متن جستجو"
                                  @keyup="searchItems"
                    ></v-text-field>

                    <v-divider></v-divider>

                    <v-tabs class="mt-5 grey darken-3" v-model="activeTab">
                        <v-tab href="#posts" @click.stop="goTo('posts')">پست ها</v-tab>
                        <v-tab href="#users" @click.stop="goTo('users')">کاربران</v-tab>
                        <v-tab href="#categories" @click.stop="goTo('categories')">دسته بندی ها</v-tab>
                        <v-tab href="#no-content" style="display: none;">no-content</v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="activeTab">
                        <v-tab-item value="posts" v-if="activeTab === 'posts'">
                            <template v-if="items.data">
                            <div class="mt-10"
                                 v-for="post in items.data"
                                 :key="post.slug"
                            >
                                <SearchPost :post="post"
                                            @bookmark="function(event) { bookmarkPost(event); }"
                                ></SearchPost>
                            </div>
                                <div class="text-center">
                                    <v-btn class="mt-10 align-center"
                                           v-if="!! items.next_page_url"
                                           rounded
                                           x-large dark
                                           color="info"
                                           @click="fetchNextItems"
                                    >نمایش موارد بیشتر&nbsp;<v-icon>mdi-contain-end</v-icon></v-btn>
                                </div>
                            <p class="mt-12 mb-10"
                               v-if="! items.data.length"
                            >هیچ نوشته ای یافت نشد.</p>
                            <br><br><br>
                            </template>
                            <template
                            v-else
                            >
                                <skeleton-loader></skeleton-loader>
                            </template>
                        </v-tab-item>
                        <v-tab-item value="users" v-if="activeTab === 'users'">
                            <template v-if="items.data">
                            <template v-for="(user, index) in items.data">
                                <div class="d-flex flex-row my-5"
                                     :key="user.username"
                                >
                                    <div>
                                        <router-link
                                            :to="{ name: 'user-posts', params: { username: user.username }}">
                                            <v-avatar>
                                                <v-img :src="user.profile_src"></v-img>
                                            </v-avatar>
                                        </router-link>
                                        <router-link
                                            :to="{ name: 'user-posts', params: { username: user.username }}">
                                            <span class="mr-5">{{ user.name }}</span>
                                        </router-link>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <div>
                                        <v-btn
                                            :color="user.is_follows? 'success' : 'info'"
                                            rounded
                                            v-if=" $store.state.isLoggedIn &&
                                            $store.state.user.id != user.id"
                                            dark
                                            small
                                            class="darken-2 px-5 mt-3 mr-3 mb-3"
                                            @click="followUser(index, user.username)"
                                        >{{user.is_follows ? 'دنبال میکنید' : 'دنبال کردن'}}
                                            &nbsp;
                                            <v-icon small>
                                                {{user.is_follows? 'mdi-check-outline':'mdi-plus'}}
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                </div>
                                <v-divider></v-divider>
                            </template>
                                <div class="text-center">
                                    <v-btn class="mt-10 align-center"
                                           v-if="!! items.next_page_url"
                                           rounded
                                           x-large dark
                                           color="info"
                                           @click="fetchNextItems"
                                    >نمایش موارد بیشتر&nbsp;<v-icon>mdi-contain-end</v-icon></v-btn>
                                </div>
                            <p class="mt-12 mb-10"
                               v-if="! items.data.length"
                            >هیچ کاربری یافت نشد.</p>
                            <br><br><br>
                            </template>
                            <template v-else>
                                <skeleton-loader></skeleton-loader>
                            </template>
                        </v-tab-item>
                        <v-tab-item value="categories" v-if="activeTab === 'categories'">
                            <template v-if="items[0]">
                            <div class="mt-10">
                                <v-btn v-for="category in items"
                                       :key="category.slug"
                                       class="mr-3 mb-3"
                                       depressed
                                       :to="{ name: 'post-category', params: { slug: category.slug } }"
                                >
                                    {{ category.title }}
                                </v-btn>
                                <br><br><br>
                            </div>
                            </template>
                            <template
                            v-else
                            >
                                <div v-if="items.length==0">
                                <p class="mt-12 mb-10"
                                >هیچ دسته بندی یافت نشد.</p>
                                <br><br><br>
                                </div>
                                <div v-else>
                                <skeleton-loader
                                ></skeleton-loader>
                                </div>
                            </template>
                        </v-tab-item>
                        <v-tab-item value="no-content">
                            <p class="mt-5">شما هیچ متنی را جستجو نکردید!</p>
                        </v-tab-item>
                    </v-tabs-items>
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
    import { ref } from '@vue/composition-api';

    import { debounce } from 'lodash';
    import NewPost from "../../components/posts/NewPost";
    import SkeletonLoader from "../../components/SkeletonLoader";
    import MustLoginDialog from "../../components/auth/MustLoginDialog";
    import SearchPost from "../../components/posts/SearchPost";

    export default {
        name: "Index",

        components: {
            SearchPost,
            MustLoginDialog,
            SkeletonLoader,
            NewPost

        },

        metaInfo() {
            return {
                title: 'جستجوی ' + this.$route.query.q + ' - '
            }
        },

        setup(props, { root }) {
            // state
            const search = ref(root.$route.query.q);
            const activeTab = ref(root.$route.params.type);
            const items = ref({});
            const mustLogin= ref({
                dialog:false,
                message:''
            });


            let pageType = root.$route.params.type;

            // methods
            const goTo = (type) => {
                root.$router.push({
                    name: 'search',
                    params: { type },
                    query: { q: search.value }
                });
            };
            const fetchItems = () => {
                if (search.value !== '') {
                    activeTab.value = root.$route.params.type;
                    axios.get(`/api/search/${pageType}?q=${search.value}`)
                        .then(({ data }) => {
                            items.value = data[pageType];
                        });
                }
            };
            const fetchNextItems = () => {
                axios.get(items.value.next_page_url)
                    .then(({ data }) => {
                        items.value.data.push(
                            ...data[pageType].data
                        );
                        items.value.next_page_url = data[pageType].next_page_url
                    });
            };
            const searchItems = debounce(function () {
                fetchItems();
                history.replaceState({}, '', `/search/${pageType}?q=${search.value}`);
            }, 500);
            const followUser = (index, username) => {
                axios.post(`/api/follows/${username}`)
                    .then(res => {
                        items.value.data[index].is_follows = !items.value.data[index].is_follows;
                    });
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

            // created hook
            if (pageType !== 'posts' && pageType !== 'users' && pageType !== 'categories') {
                root.$router.push({ name: 'not-found' });
            }
            if (search.value === '') {
                activeTab.value = 'no-content';
            }
            fetchItems();

            return {
                search,
                activeTab,
                items,
                goTo,
                searchItems,
                mustLogin,
                followUser,
                fetchNextItems,
                bookmarkPost
            }
        }
    }
</script>

<style scoped>

</style>
