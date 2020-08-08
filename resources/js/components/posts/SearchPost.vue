<template>
    <div>
        <v-card class="ma-2"
        >
            <router-link
                class="white--text"
                :to="{ name: 'post-show', params: { slug: post.slug } }"
                v-if="post.image === '/img/posts/none'"
            >
                <v-sheet
                    class="white--text"
                    color="info"
                    height="100%"
                    tile
                >
                    <v-card-text class="title font-weight-bold mx-auto">
                                                    <span class="mt-12">
                                                    {{ post.title }}
                                                    </span>
                    </v-card-text>
                </v-sheet>
            </router-link>
            <v-img
                v-else
                class="white--text align-center"
                max-height="300"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                :src="post.image"
            >
                <router-link :to="{ name: 'post-show', params: { slug: post.slug } }">
                    <v-card-text class="title font-weight-bold white--text mx-auto">
                <span>
                    {{ post.title }}
                </span>
                    </v-card-text>
                </router-link>
            </v-img>
            <v-card-actions>
                <v-list-item>

                        <v-list-item-subtitle class="caption grey--text">
                        <span class="caption">
                            خواندن
                            {{ post.min_read }}
                            دقیقه
                        </span>
                        </v-list-item-subtitle>
                </v-list-item>

                <v-spacer></v-spacer>
                <v-btn
                    @click="$emit('bookmark', post)"
                    icon
                >
                    <v-icon>
                        {{ post.is_bookmarked ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}
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
                        {{ post.description }}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "SearchPost",
        props: {
            post: {
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
