<template>
    <v-list v-if="posts.length>0">
        <router-link :to="{name: 'friend-posts'}">
        <v-subheader class="subtitle font-weight-black red--text">پست های جدید دوستان </v-subheader>
        </router-link>
        <v-list-item-group>
            <v-list-item v-for="post in posts"
                         :key="post.id">

                <v-list-item-icon>
                    <router-link
                        :to="{ name: 'user-posts', params: { username: post.user.username } }"
                    >
                    <v-avatar size="35">
                        <v-img :src="post.user.profile_src"
                        ></v-img>
                    </v-avatar>
                    </router-link>
                </v-list-item-icon>

                <v-list-item-content>
                    <router-link
                        :to="{ name: 'post-show', params: { slug: post.slug } }"
                    >
                                            <span class="caption d-inline-block text-truncate red--text"
                                                  style="max-width: 240px"
                                            >
                                                {{post.title}}
                                            </span>
                    </router-link>
                    <span class="grey--text overline">{{post.user.name}}</span>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
    export default {
        name: "FollowingPosts",
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
