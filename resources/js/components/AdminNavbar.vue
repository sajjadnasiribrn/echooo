<template>
    <v-app-bar color="#FFD600"
               flat
               :dark="$vuetify.theme.dark"
               hide-on-scroll
               app
    >
        <v-container fluid>
            <v-row>
                <v-container>
                    <v-row align="center">
                        <v-col cols="auto" class="d-flex flex-row">
                            <v-app-bar-nav-icon
                                @click="$emit('show-navigation')"
                            ></v-app-bar-nav-icon>
                            <v-img src="/img/logoo1.png"
                                   alt="website logo"
                                   max-height="40px"
                                   min-width="40px"
                                   max-width="40px"
                            ></v-img>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="auto">
                            <a @click.prevent="logout" class="info--text ml-8">خروج <v-icon>mdi-logout-variant</v-icon></a>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </v-container>

    </v-app-bar>
</template>

<script>
    export default {
        name: "AdminNavbar",
        methods: {
            logout() {
                this.$store.dispatch('logout')
                    .then(res => {
                        this.$router.push({ name: 'home' });
                    });
            }
        }
    }
</script>

<style scoped>

</style>
