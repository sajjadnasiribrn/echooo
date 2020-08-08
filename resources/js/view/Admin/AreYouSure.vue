<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            persistent
            width="500"
        >
            <v-card>
                <v-card-text class="pt-5">
                    <span class="title">آیا مطمئن هستید؟</span>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="error"
                        @click="$emit('yes')"
                    >
                        بله
                    </v-btn>
                    <v-btn
                        color="primary"
                        @click="$emit('close')"
                    >
                        بستن
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "AreYouSure",
        props: {
            dialog: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
