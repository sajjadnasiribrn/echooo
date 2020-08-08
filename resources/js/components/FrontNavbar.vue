<template>
    <div>
        <v-app-bar color="#FFD600"
                   :height="$vuetify.breakpoint.smAndDown? 80 : 170"
        >
            <v-container fluid>
                <v-row>
                    <v-container>
                        <v-row align="center">
                            <v-col cols="auto" class="d-flex flex-row">
                                <router-link :to="{name: 'home'}">
                                <v-img src="/img/logoo1.png"
                                       class="mt-7"
                                       v-if="$vuetify.breakpoint.mdAndUp"
                                alt="website-logo"
                                       max-height="90px"
                                       min-width="70px"
                                       max-width="75px"
                                ></v-img>
                                </router-link>
                            </v-col>
                            <v-col
                                v-if="$vuetify.breakpoint.smAndDown"
                                class="d-flex flex-row"
                                cols="auto"
                            >
                                <v-app-bar-nav-icon class="hidden-md-and-up"
                                                    @click.stop="drawer = !drawer"
                                ></v-app-bar-nav-icon>
                                <router-link :to="{name: 'home'}">
                                <v-img src="/img/logoo2.png"
                                       v-if="$vuetify.breakpoint.smAndDown"
                                       alt="website logo"
                                ></v-img>
                                </router-link>
                            </v-col>
                            <v-spacer></v-spacer>

                            <v-col cols="auto">
                                <div class="mt-md-8">
                                    <search></search>
                                <template v-if="!auth">
                                <v-btn :to="{ name: 'login' }"
                                       v-if="$vuetify.breakpoint.mdAndUp"
                                       text
                                       small
                                       color="teal lighten-1"
                                >ورود</v-btn>
                                <span v-if="$vuetify.breakpoint.mdAndUp">/</span>
                                <v-btn :to="{ name: 'register' }"
                                       v-if="$vuetify.breakpoint.mdAndUp"
                                       text
                                       small
                                       color="pink lighten-1"
                                >ثبت نام</v-btn>

                                <v-btn :to="{ name: 'login' }"
                                       v-if="$vuetify.breakpoint.smAndDown"
                                       text
                                       title="ورود"
                                       small
                                       color="teal lighten-1"
                                ><v-icon>mdi-account</v-icon></v-btn>
                                <v-btn :to="{ name: 'register' }"
                                       v-if="$vuetify.breakpoint.smAndDown"
                                       text
                                       title="ثبت نام"
                                       small
                                       color="pink lighten-2"
                                ><v-icon>mdi-pen</v-icon></v-btn>
                                </template>
                                <template v-else>
                                    <v-btn @click="$emit('show-notification')"
                                           class="ml-3"
                                           icon
                                           text
                                    >
                                        <v-badge
                                            color="red"
                                            :content="notificationCount==0 ? '0' : notificationCount"
                                            left
                                        >
                                        <v-icon>mdi-alarm-bell</v-icon>
                                        </v-badge>
                                    </v-btn>

                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on"
                                                   text
                                                   fab
                                            >
                                                <v-avatar>
                                                    <v-img :src="profile_src"
                                                           v-if="!!$store.state.user.profile_src"
                                                           max-width="40px"
                                                           max-height="40px"
                                                    ></v-img>
                                                    <v-icon v-else>mdi-account-check</v-icon>
                                                </v-avatar>
                                            </v-btn>
                                        </template>
                                        <v-list width="200px">
                                            <v-list-item class="body-2"
                                                         two-line>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        <span>{{user}}</span>
                                                    </v-list-item-title>

                                                    <v-list-item-subtitle class="pt-2">
                                                        <v-btn
                                                            small
                                                        color="purple accent-2"
                                                            :to="{ name: 'user-posts', params: { username: username } }"
                                                        >
                                                        رفتن به پروفایل&nbsp;<v-icon>mdi-account-arrow-left</v-icon>
                                                        </v-btn>
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                                </v-list-item>
                                            <v-divider></v-divider>
                                            <v-list-item
                                                :disabled="isVerified!=2"
                                                :to="{name: 'create-posts'}">
                                                <v-list-item-content>
                                                <v-list-item-title>
                                                نوشتن پست جدید&nbsp; <v-icon>mdi-lead-pencil</v-icon>
                                                </v-list-item-title>
                                                <v-list-item-subtitle v-if="isVerified!=2">
                                                    <span class="body-2"> (ابتدا ایمیل خود را تایید کنید)</span>
                                                </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                                <v-divider></v-divider>
                                                <v-list-item
                                                    :disabled="isVerified!=2"
                                                    :to="{name: 'my-posts'}">
                                                    نوشته های شما&nbsp; <v-icon>mdi-format-list-bulleted-type</v-icon>
                                                </v-list-item>
                                            <v-divider></v-divider>
                                            <v-list-item :to="{name: 'bookmarked-posts'}">
                                                <span class="body-2">نوشته های ذخیره شده</span>&nbsp; <v-icon>mdi-bookmark</v-icon>
                                            </v-list-item>
                                            <v-divider></v-divider>
                                            <v-list-item :to="{name: 'liked-posts'}">
                                                نوشته های لایک شده&nbsp; <v-icon>mdi-heart</v-icon>
                                            </v-list-item>
                                            <v-divider></v-divider>
                                            <v-list-item @click.prevent="nightMode">
                                                <template v-if="isDark">
                                                    حالت روز&nbsp;<v-icon>mdi-white-balance-sunny</v-icon>
                                                </template>
                                                <template v-else>
                                                    حالت شب&nbsp;<v-icon>mdi-weather-night</v-icon>
                                                </template>
                                            </v-list-item>
                                            <v-divider></v-divider>
                                            <v-list-item
                                                @click.prevent="logout">
                                                خروج&nbsp; <v-icon>mdi-power</v-icon>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </template>
                                </div>
                            </v-col>

                        </v-row>
                    </v-container>
                </v-row>
                <v-row class="grey darken-4 pt-0" v-if="$vuetify.breakpoint.mdAndUp">
                    <v-col cols="12">
                        <v-container>
                            <v-row>

                                <v-menu open-on-hover
                                        transition="slide-y-transition"
                                        bottom
                                        v-for="i in menus"
                                        :key="i.text"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-col cols="auto" class="py-1">
                                            <v-btn
                                                text
                                                dark
                                                v-if="i.if? auth : true"
                                                v-on="i.link? '' : on"
                                                :to="i.link? i.link : ''"
                                            >
                                                {{i.text}}
                                                &nbsp;<v-icon>{{i.icon}}</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </template>
                                    <v-list>
                                        <div
                                            v-for="(category,i) in $store.state.categories"
                                            :key="i"
                                        >
                                        <v-list-item
                                            :to="{ name: 'post-category', params: { slug: category.slug } }"
                                        >
                                            <v-hover
                                                v-slot:default="{ hover }"
                                            >
                                            <v-list-item-title
                                                :class=" hover ? 'font-weight-black red--text' : ''"
                                            >

                                                {{category.title }}
                                            </v-list-item-title>
                                            </v-hover>
                                        </v-list-item>
                                            <v-divider
                                                v-if="i != $store.state.categories.length-1"
                                                class="mx-2"
                                            ></v-divider>
                                        </div>
                                    </v-list>
                                </v-menu>
                                <v-spacer></v-spacer>
                                <a href="https://www.instagram.com/ssajjad_nasiri/?hl=en">
                                <v-btn
                                    text
                                    dark
                                    small
                                    class="mt-2"
                                >
                                    ارتباط با ما
                                    &nbsp;<v-icon>mdi-phone-in-talk</v-icon>
                                </v-btn>
                                </a>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <div>
            <v-navigation-drawer
                right
                width="300"
                app
                temporary
                v-model="drawer"
            >
                <v-toolbar
                    color="#ffd600"
                >
                    <v-toolbar-title class="mr-5">
                <span class="font-weight-bold body-1">
                    منو
                      <v-btn icon>
                      <v-icon>mdi-menu-open</v-icon>
                      </v-btn>
                </span>
                    </v-toolbar-title>
                </v-toolbar>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                        v-model="group"
                        active-class="cyan--text text--accent-4"
                    >
                        <v-list-item
                        :to="{name: 'home'}"
                        >
                            <v-list-item-content class="mt-4">
                                <p>صفحه اصلی <v-icon>mdi-home-circle-outline</v-icon></p>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider
                            class="mx-2"
                        ></v-divider>
                        <v-list-item
                            :to="{name: 'friend-posts'}"
                        >
                            <v-list-item-content class="mt-4">
                                <p>پست های جدید دوستان <v-icon>mdi-post-outline</v-icon></p>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider
                            class="mx-2"
                        ></v-divider>
                        <v-list-group>
                            <template v-slot:activator>
                                <v-list-item-content class="mt-4">
                                    <p>موضوعات دارای بیشترین پست </p>
                                </v-list-item-content>
                            </template>
                            <div
                                v-for="(category,i) in $store.state.categories"
                                :key="i"
                            >
                                <v-list-item
                                    :to="{ name: 'post-category', params: { slug: category.slug } }"
                                >
                                    <v-hover
                                        v-slot:default="{ hover }"
                                    >
                                        <v-list-item-title
                                            :class=" hover ? 'font-weight-black red--text' : ''"
                                        >

                                            {{category.title }}
                                        </v-list-item-title>
                                    </v-hover>
                                </v-list-item>
                                <v-divider
                                    v-if="i != $store.state.categories.length-1"
                                    class="mx-2"
                                ></v-divider>
                            </div>
                        </v-list-group>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    import FrontNavigationDrawer from "./FrontNavigationDrawer";
    import Search from "./Search";
    export default {
        name: "FrontNavbar",
        components: {Search, FrontNavigationDrawer},
        data() {
            return {
                drawer: false,
                group: null,
                menus: [
                    {
                        text: 'صفحه اصلی',
                        link: '/',
                        icon: 'mdi-home-circle-outline',
                        class: 'white--text'
                    },
                    {
                        text: 'پست های جدید دوستان',
                        link: '/friend-posts',
                        if:'auth',
                        icon: 'mdi-post-outline',
                        class: 'white--text'
                    },
                    {
                        text: 'موضوعات دارای بیشترین پست',
                        icon:'mdi-chevron-down-circle-outline',
                        class: 'white--text'
                    },
                ],
                watch: {
                    group () {
                        this.drawer = false
                    },
                },
            }
        },
        computed:{
            ...mapState({
                notificationCount: state=>state.unreadNotificationCount,
                auth:state=>state.isLoggedIn,
                user:state=>state.user.name,
                username: state=>state.user.username,
                profile_src: state=>state.user.profile_src,
                isVerified: state=>state.user.isVerified,
                isDark() {
                    return this.$vuetify.theme.dark;
                }
            })
        },

        created() {
            this.$store.dispatch('getNavbarCategories');
        },

        methods:{
            logout(){
                this.$store.dispatch('logout')
                .then(()=>{
                    this.$router.push({name : 'home'})
                })
            },
            nightMode() {
                this.$vuetify.theme.dark = ! this.isDark;
                this.isDark ? localStorage.setItem('isDark', 1): localStorage.removeItem('isDark');
            },
        },
    }

</script>

<style>
    .v-input__control .v-input__slot::before {
        border-color: white !important;
    }
</style>
