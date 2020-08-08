<template>
    <v-menu v-model="search"
            :close-on-content-click="false"
            absolute
            top
            min-width="100%"
    >
        <template v-slot:activator="{ on }">
            <v-btn
                fab
                text
                @click="search = true"
            >
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </template>
        <v-list class="d-flex flex-row align-center">
            <v-text-field
                v-model="form"
                class="mr-10"
                @keyup.enter="pushToSearch"
                placeholder="در بین مقالات، نویسندگان و… جستجو کنید"
            ></v-text-field>
            <v-btn class="ml-3 title"
                   text
                   small
                   fab
                   @click="pushToSearch"
            ><v-icon>mdi-database-search</v-icon></v-btn>
            <v-btn class="ml-4 title"
                   text
                   small
                   fab
                   @click="search = false"
            ><v-icon>mdi-window-close </v-icon></v-btn>
        </v-list>
    </v-menu>
</template>

<script>
    import { ref } from '@vue/composition-api';
    import { debounce } from 'lodash';
    export default {
        name: "Search",
        setup(props,{root}){
            //state
            const search=ref(false);
            const form=ref(null);


            //methods
            const pushToSearch= ()=> {
                root.$router.push({
                    name: 'search',
                    params: { type: 'posts' },
                    query: { q: form.value }
                })
            };


            return{
                search,
                form,
                pushToSearch,


            }
        }
    }
</script>

<style scoped>

</style>
