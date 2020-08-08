<template>
    <v-content>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8" class="mt-8">
                    <template v-if="items.data">
                        <div class="my-5 mt-7" v-if="$store.state.isLoggedIn
                         && $store.state.user.username== userUsername">
                            <h1 class="display-1 font-weight-bold"
                            v-if="pageType==='following'"
                            >افرادی که دنبال میکنید:</h1>
                            <h1 class="display-1 font-weight-bold"
                            v-else
                            >افرادی که شما را دنبال میکنند:
                            </h1>
                        </div>
                        <div class="my-5 mt-7" v-else>
                            <h1 class="display-1 font-weight-bold"
                                v-if="pageType==='following'"
                            >افرادی که دنبال میکند:</h1>
                            <h1 class="display-1 font-weight-bold"
                                v-else
                            >توسط این افراد دنبال می شود:
                            </h1>
                        </div>
                    <template v-for="(user, index) in items.data">
                        <div class="d-flex flex-row my-5 mt-12"
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
                    <br><br><br><br><br>
                    </template>
<template v-else>
    <skeleton-loader></skeleton-loader>
</template>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import { ref } from '@vue/composition-api';
    import SkeletonLoader from "../../components/SkeletonLoader";
    export default {
        name: "UserFriends",
        components: {SkeletonLoader},

        metaInfo() {
            return {
                title: `${this.$route.params.type=='following' ? 'دنبال شوندگان ' : 'دنبال کنندگان '} ${this.$route.params.username}`
            }
        },

        setup(props, { root }){
            const items=ref({});
            const pageType=ref(root.$route.params.type);
            const userUsername=ref(root.$route.params.username);

            //METHODS
            let type = root.$route.params.type;
            let username=root.$route.params.username;

            const fetchItems = () => {
                    axios.get(`/api/${username}/${type}`)
                        .then(({ data }) => {
                            items.value = data[type];
                        });
            };

            const fetchNextItems = () => {
                axios.get(items.value.next_page_url)
                    .then(({ data }) => {
                        items.value.data.push(
                            ...data[type].data
                        );
                        items.value.next_page_url = data[type].next_page_url
                    });
            };

            const followUser = (index, username) => {
                axios.post(`/api/follows/${username}`)
                    .then(res => {
                        items.value.data[index].is_follows = !items.value.data[index].is_follows;
                    });
            };

            //hooks
            fetchItems();

            return{
                items,
                pageType,
                userUsername,
                fetchNextItems,
                followUser
            }
        }
    }
</script>

<style scoped>

</style>
