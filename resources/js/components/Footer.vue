<template>
    <v-footer
        dark
        padless
        class="mt-5"
    >
        <v-card
            class="flex"
            flat
            tile
        >
            <div class="flex-row">
            <v-card-title class="yellow accent-4">
                <strong class="subheading" :class="$vuetify.breakpoint.smAndDown? 'subtitle-1':''">اِکو در شبکه های اجتماعی:</strong>

                <v-spacer></v-spacer>
<div class="flex-row">
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    dark
                    icon
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
</div>
            </v-card-title>
            </div>

            <v-card-text class="py-2 text-center">
                <a href="https://www.instagram.com/ssajjad_nasiri/?hl=en">
                <strong class="white--text">my kind of creature</strong>
                </a>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data (){
            return {
                icons: [
                    'mdi-twitter',
                    'mdi-telegram',
                    'mdi-instagram',
                ],
            }
        },

    }
</script>

<style scoped>

</style>
