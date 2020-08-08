<template>
    <div>
    <v-card class="ma-2"
            max-width="280"
    >
        <router-link
            class="white--text"
            :to="{ name: 'post-show', params: { slug: related_post.slug } }"
            v-if="related_post.image === '/img/posts/none'"
        >
        <v-sheet
            class="white--text"
            max-height="250"
            min-height="250"
            max-width="280"
            min-width="280"
            color="info"
            height="100%"
            tile
        >
            <v-card-text class="title font-weight-bold mx-auto">
                                                    <span class="mt-12">
                                                    {{ related_post.title }}
                                                    </span>
            </v-card-text>
        </v-sheet>
        </router-link>
        <v-img
            v-else
            class="white--text align-center"
            max-height="250"
            min-height="250"
            max-width="280"
            min-width="280"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            :src="related_post.image"
        >
            <router-link :to="{ name: 'post-show', params: { slug: related_post.slug } }">
            <v-card-text class="title font-weight-bold white--text mx-auto">
                <span>
                    {{ related_post.title }}
                </span>
            </v-card-text>
            </router-link>
        </v-img>
        <v-card-actions>
            <v-list-item :to="{ name: 'user-posts', params: { username: related_post.user.username } }">
                <v-list-item-avatar>
                    <v-avatar>
                        <v-img
                            :src="related_post.user.profile_src || '/img/avatar.png'"
                        ></v-img>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="body-2 font-weight-bold
                     d-inline-block text-truncate"
                                       style="max-width: 110px;"
                    >
                        <span class="body-1">
                            {{ related_post.user.name }}
                        </span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="caption grey--text">
                        <span class="caption">
                            خواندن
                            {{ related_post.min_read }}
                            دقیقه
                        </span>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-spacer></v-spacer>
            <v-btn
            @click="$emit('click', related_post)"
            icon
            >
            <v-icon>
                {{ related_post.is_bookmarked ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}
            </v-icon>
            </v-btn>
            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>
                    {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    {{ related_post.description }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
    </div>
</template>

<script>
    export default {
        name: "RelatedPost",
        props: {
            related_post: {
                type: Object,
                required: true
            }
        },
        setup() {
            const show = false;


            return {
                show
            }
        }
    }
</script>

<style scoped>

</style>
