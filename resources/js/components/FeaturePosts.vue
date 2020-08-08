<template>
    <div>
        <v-card
        flat
        >
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="/img/logo2.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>انتخاب سایت برای شما:</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
    <v-container fluid>
        <v-row>
            <v-slide-group
                active-class="success"
                show-arrows
            >
                <v-slide-item v-for="(feature_post,i) in feature_posts" :key="i"
                              v-slot:default="{active,toggle}"
                >
                    <v-card class="ma-2"
                            max-width="280"
                    >
                        <router-link
                            class="white--text"
                            :to="{ name: 'post-show', params: { slug: feature_post.post.slug } }"
                            v-if="feature_post.post.image === '/img/posts/none'"
                        >
                            <v-sheet
                                class="white--text"
                                max-height="230"
                                min-height="230"
                                max-width="280"
                                min-width="280"
                                color="info"
                                height="100%"
                                tile
                            >
                                <v-card-text class="title font-weight-bold mx-auto">
                                                    <span class="mt-12">
                                                    {{ feature_post.post.title }}
                                                    </span>
                                </v-card-text>
                            </v-sheet>
                        </router-link>
                        <v-img
                            v-else
                            class="white--text align-center"
                            max-height="230"
                            min-height="230"
                            max-width="280"
                            min-width="280"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            :src="feature_post.post.image"
                        >
                            <router-link :to="{ name: 'post-show', params: { slug: feature_post.post.slug } }">
                                <v-card-text class="title font-weight-bold white--text mx-auto">
                <span>
                    {{ feature_post.post.title }}
                </span>
                                </v-card-text>
                            </router-link>
                        </v-img>
                        <v-card-actions>
                            <v-list-item :to="{ name: 'user-posts', params: { username: feature_post.post.user.username } }">
                                <v-list-item-avatar>
                                    <v-avatar>
                                        <v-img
                                            :src="feature_post.post.user.profile_src || '/img/avatar.png'"
                                        ></v-img>
                                    </v-avatar>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="body-2 font-weight-bold
                     d-inline-block text-truncate"
                                                       style="max-width: 110px;"
                                    >
                        <span class="body-1">
                            {{ feature_post.post.user.name }}
                        </span>
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="caption grey--text">
                        <span class="caption">
                            {{moment(feature_post.post.created_at).fromNow()}}
                        </span>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-actions>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-row>
    </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "FeaturePosts",
        data(){
            return{
                feature_posts: {},
                moment
            }
        },
        created() {
            axios.get('/api/feature-posts')
            .then(({ data })=>{
                this.feature_posts=data.data;
            })
        }
    }
</script>

<style scoped>

</style>
