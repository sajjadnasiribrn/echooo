<template>
        <v-list>
            <v-subheader class="subtitle font-weight-bold amber--text">محبوب‌ترین‌ پست ها </v-subheader>
            <v-list-item-group>
                <v-list-item v-for="(post,i) in posts"
                :key="i">
                    <v-list-item-icon>
                        <router-link
                            :to="{ name: 'user-posts', params: { username: post.user_username } }"
                        >
                        <v-avatar size="35">
                            <v-img :src="post.user_profile_src"
                            ></v-img>
                        </v-avatar>
                        </router-link>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <router-link
                            :to="{ name: 'post-show', params: { slug: post.slug } }"
                        >
                                            <span class="amber--text caption d-inline-block text-truncate"
                                                  style="max-width: 240px"
                                            >
                                                {{post.title}}
                                            </span>
                        </router-link>
                        <span class="grey--text overline">{{post.user_name}}</span>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
</template>

<script>
    export default {
        name: "PopularPosts",
        props: {
            posts: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>
