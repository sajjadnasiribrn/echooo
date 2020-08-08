<template>
    <v-card

    >
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
            :continuous="false"
            :cycle="false"
            :show-arrows="true"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
        >
            <v-carousel-item
                v-for="(post, index) in data" :key="index"
            >
                <v-sheet
                    v-if="post.image==='dont-have'"
                    color="yellow darken-1"
                    height="100%"
                    tile
                >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <v-card-text class="mr-7"><span class="title">{{ post.title }}</span></v-card-text>
                        <v-card-actions class="mr-3 mb-3">
                            <v-avatar>
                                <v-img :src="post.user.profile"></v-img>
                            </v-avatar>
                            <div class="d-flex flex-column mr-3">
                                <span class="body-1">{{ post.user.name }}</span>
                                <span class="body-2">3 روز پیش</span>
                            </div>
                        </v-card-actions>
                    </v-row>
                </v-sheet>
                <v-img :src="post.image"
                       v-else-if="post.image"
                       min-height="300px"
                       max-height="300px"
                       class="d-flex align-end white--text"
                >
                    <v-card-text><span class="title">{{ post.title }}</span></v-card-text>
                    <v-card-actions class="mr-3 mb-3">
                        <v-avatar>
                            <v-img :src="post.user.profile"></v-img>
                        </v-avatar>
                        <div class="d-flex flex-column mr-3">
                            <span class="body-1">{{ post.user.name }}</span>
                            <span class="body-2">3 روز پیش</span>
                        </div>
                    </v-card-actions>
                </v-img>
            </v-carousel-item>
        </v-carousel>
        <v-list two-line>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="/img/logo2.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>انتخاب سایت برای شما</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: "Slider",
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        data(){
            return{
                colors: [
                    'green',
                    'secondary',
                    'yellow darken-4',
                    'red lighten-2',
                    'orange darken-1',
                ]
            }
        }
    }
</script>

<style>

</style>


