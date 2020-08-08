<template>
                <v-sheet elevation="0" class="py-3 px-1">
                    <span class="body-2 grey--text mr-4">نویسندگان پر بازدید:</span>
                    <v-chip-group
                        multiple
                        :show-arrows="true"
                        active-class="primary--text"
                    >
                        <v-chip v-for="writer in writers" :key="writer.username"
                                class="ma-2"
                                color="yellow accent-1"
                                text-color="grey darken-3"
                                :to="{ name: 'user-posts', params: { username: writer.username } }"
                        >
                            {{ writer.name }}
                        </v-chip>
                    </v-chip-group>
                </v-sheet>
</template>

<script>
    import { ref } from '@vue/composition-api';

    export default {
        name: "PopularWriter",
        setup() {
            // state
            const writers = ref({});

            // created hook
            axios.get('/api/trending-writers')
                .then(({ data }) => {
                    writers.value = data.writers;
                });

            return {
                writers
            }
        }
    }
</script>

<style scoped>

</style>
