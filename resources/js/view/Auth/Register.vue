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
                <span class="display-1">ایجاد حساب کاربری</span>
            </v-card-title>

            <v-card-text>
                <span class="body-1">
                    ثبت نام کن و بنویس؛ قلم تو از خودت باهوش تره!
                </span>
                <v-form
                    ref="registerForm">
                <v-text-field
                    class="pt-8"
                    label="ایمیل"
                    outlined
                    dense
                    :rules="emailRules"
                    :error-messages="errors.email"
                    v-model="form.email"
                ></v-text-field>
                <v-text-field
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show2 ? 'text' : 'password'"
                    label="کلمه عبور"
                    hint="حداقل 5 کاراکتر"
                    outlined
                    :rules="passwordRules"
                    :error-messages="errors.password"
                    dense
                    class="input-group--focused pt-3"
                    @click:append="show2 = !show2"
                    v-model="form.password"
                ></v-text-field>
                <div class="d-flex">
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
                                   @click="register"
                            >
                            ایجاد حساب کاربری <v-icon class="mr-2">mdi-pen</v-icon>
                            </v-btn>
                        </template>
                </div>
                <div class="d-flex flex-column align-center justify-center mt-9 body-2 grey--text">
                    <span class="mt-4 subtitle-1 red--text">ثبت نام سریع با اکانت گوگل<v-icon class="mr-2" color="red">mdi-gmail</v-icon></span>
                    <span class="mt-4">قبلا عضو شده اید؟ <router-link :to="{ name: 'login' }">ورود</router-link></span>
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
    import { ref } from '@vue/composition-api';
    import store from '../../store';
    export default {
        name: "Register",
        metaInfo: {
            title: 'ثبت نام -',
        },

        setup(props,{ root }) {
            const show2= ref(false);
            const registerForm = ref(null);
            const form = ref({
                email: null,
                password: null,
            });
            const errors = ref({
                email: null,
                password: null,
            });
            const emailRules=ref([
                value => !! value || 'ایمیل مهم است.',
                value => root.$msValid.validEmail(value) || 'یک ایمیل درست را وارد کنید.',
                value => (value ? value.length <= 255 : false) || 'طول ایمیل نباید بیشتر از 255 کاراکتر باشد.'
            ]);
            const passwordRules=ref([
                value => !! value || 'کلمه عبور مهم است.',
                value => (value ? value.length >= 5 : false) || 'کلمه عبور بیشتر از 5 کاراکتر باشد.',
            ]);
            const loading = ref(false);
            function register() {
                if(registerForm.value.validate()) {
                    loading.value = true;
                    store.dispatch('register', form.value)
                        .then(()=>{
                        root.$router.push({name:'email-verify'});
                    })
                        .catch((error) => {
                            errors.value.email = error.response.data.errors.email[0];
                            errors.value.password = error.response.data.errors.password[0];
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
                registerForm,
                register
            }
        },
    }
</script>

<style scoped>
    .gra-bg {
        background-image: linear-gradient(to bottom right,#054592 0,#1897d4);
    }
    .h-100 {
        height: 100%;
    }
    .h-40 {
        height: 40%;
    }
</style>
