<template>
    <v-content>
        <v-row>
            <v-container class="mt-md-10">
                <v-row justify="space-around" class="px-2">
                    <v-col cols="12" md="6">
                        <v-card
                            class="mx-auto"
                            style="max-width: 700px;"
                            flat
                        >
                            <v-card-title class="title font-weight-regular">
                                <span class="display-1">ورود به پروفایل</span>
                            </v-card-title>

                            <v-card-text>
                <span class="body-1">

                </span>
                                <v-form ref="loginForm">
                                <v-text-field
                                    class="pt-8"
                                    label="ایمیل یا نام کاربری"
                                    outlined
                                    dense
                                    :rules="emailRules"
                                    :error-messages="errors.email"
                                    v-model="form.email"
                                ></v-text-field>
                                <v-text-field
                                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show2 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="کلمه عبور"
                                    :rules="passwordRules"
                                    :error-messages="errors.password"
                                    outlined
                                    dense
                                    class="input-group--focused pt-3"
                                    @click:append="show2 = !show2"
                                    v-model="form.password"
                                ></v-text-field>

                                <div class="d-flex">
                                    <span class="caption mt-2">کلمه عبور را فراموش کرده اید؟ <router-link :to="{ name: 'reset-email-password' }">بازیابی کلمه عبور</router-link></span>
                                    <v-spacer></v-spacer>
                                        <template v-if="loading">
                                            <v-btn color="info"
                                                   class="px-6"
                                                   rounded
                                            >
                                            <v-progress-circular color="white"
                                                                 :indeterminate="true"
                                            ></v-progress-circular>
                                            </v-btn>
                                        </template>
                                        <template v-else>
                                            <v-btn color="info"
                                                   class="px-6"
                                                   rounded
                                                   @click="login"
                                            >
                                            ورود<v-icon class="mr-2">mdi-chevron-left</v-icon>
                                            </v-btn>
                                        </template>
                                </div>
                                <div class="d-flex flex-column align-center justify-center mt-9 body-2 grey--text">
                                    <span class="mt-4 subtitle-1 red--text">ورود سریع با اکانت گوگل<v-icon class="mr-2" color="red">mdi-gmail</v-icon></span>
                                    <span class="mt-4">حساب کاربری ندارید؟ <router-link :to="{ name: 'register' }">ثبت نام</router-link></span>
                                </div>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
    </v-content>
</template>

<script>
    import {ref} from "@vue/composition-api";
    import store from '../../store';

    export default {
        name: "Login",
        metaInfo: {
            title: 'ورود -',
        },
        setup(props,{ root }){
            const loading = ref(false);
            const show2=ref(false);
            const loginForm=ref(null);
            const form=ref({
                email: null,
                password: null,
                remember:true
            });
            const errors = ref({
                email: null,
                password: null,
            });
            const emailRules=ref([
                value => !! value || 'این فیلد مهم است.',
                ]);
            const passwordRules=ref([
                value => !! value || 'کلمه عبور مهم است.',
                value => (value ? value.length >= 5 : false) || 'کلمه عبور بیشتر از 5 کاراکتر باشد.',
                 ]);
            function login() {
                if(loginForm.value.validate()) {
                    loading.value = true;
                    store.dispatch('login', form.value)
                        .then(() => {
                            root.$router.push({ name: 'home' })
                        })
                        .catch(({ response }) => {
                            errors.value.email = response.data.errors.email[0]
                            errors.value.password = response.data.errors.password[0]
                        })
                        .finally(() => loading.value = false)
                }
            }
            return {
                show2,
                form,
                errors,
                emailRules,
                passwordRules,
                loading,
                loginForm,
                login
            }
        },
    }
</script>

<style scoped>

</style>
