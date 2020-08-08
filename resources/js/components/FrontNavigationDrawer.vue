<template>
    <div>
    <v-navigation-drawer
                         right
                         app
                         temporary
                         v-model="drawer"
    >
        <v-list
        nav
        dense
        >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
            <v-list-item v-for="item in items" :key="item.text">
                <v-list-item-content>
                    <p>{{ item.text }}</p>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "FrontNavigationDrawer",
        props:['drawer'],

        data() {
            return {
                group: null,
                items: [
                    {
                        text: 'روانشناسی',
                        class: 'white--text'
                    },
                    {
                        text: 'علوم سیاسی',
                        class: 'white--text'
                    },
                    {
                        text: 'اقتصاد',
                        class: 'white--text'
                    },
                    {
                        text: 'اثبات گرایی',
                        class: 'white--text'
                    },
                    {
                        text: 'زبان شناسی',
                        class: 'white--text'
                    },
                    {
                        text: 'هنر زندگی و مطالعات بودایی',
                        class: 'white--text'
                    },
                    {
                        text: 'برنامه نویسی وب',
                        class: 'white--text'
                    },
                ]
            }
        },
        watch: {
            group () {
                this.drawer = false
            },
        },
    }
</script>

<style scoped>

</style>

