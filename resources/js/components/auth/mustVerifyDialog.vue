<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            persistent
            width="500"
        >
            <v-card>
                <v-card-title
                    class="font-weight-bold grey lighten-2"
                    primary-title
                >
                    نکته:
                </v-card-title>

                <v-card-text class="mt-2">
                    <span>
                        برای مشاهده این بخش لازم است به حساب کاربری خود وارد شده باشید و آن را تایید هم کرده باشید.
                    </span>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
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
        name: "mustVerifyDialog",
        props: {
            dialog: {
                type: Boolean,
                required: true
            },
        }

    }
</script>

<style scoped>

</style>
