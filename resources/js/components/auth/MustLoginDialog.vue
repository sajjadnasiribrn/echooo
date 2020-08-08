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
                    {{ message }}
                </v-card-title>

                <v-card-text>
                    <v-list rounded>
                        <v-subheader>ورود از طریق:</v-subheader>
                        <v-list-item-group color="primary">
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon color="red darken-4">
                                        mdi-google
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        ورود سریع با اکانت گوگل
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item :to="{ name: 'login' }">
                                <v-list-item-icon>
                                    <v-icon color="success">
                                        mdi-login
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        ورود با ایمیل یا نام کاربری
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-subheader>اگر هنوز حساب کاربری ندارید:</v-subheader>
                            <v-list-item :to="{ name: 'register' }">
                                <v-list-item-icon>
                                    <v-icon color="info">
                                        mdi-account-plus
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        ثبت نام
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
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
        name: "MustLoginDialog",
        props: {
            dialog: {
                type: Boolean,
                required: true
            },
            message: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>
