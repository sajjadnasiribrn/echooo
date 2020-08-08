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
                                <span class="display-1">تنظیم کلمه عبور جدید</span>
                            </v-card-title>

                            <v-card-text>
                <span class="body-1">
                    کلمه عبور جدید خود را وارد کنید:
                </span>
                                <v-form
                                    ref="resetPassword">
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
                                        label="کلمه عبور جدید"
                                        outlined
                                        :rules="passwordRules"
                                        :error-messages="errors.password"
                                        dense
                                        class="input-group--focused pt-3"
                                        @click:append="show2 = !show2"
                                        v-model="form.password"
                                    ></v-text-field>
                                    <v-text-field
                                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="show3 ? 'text' : 'password'"
                                        label="تکرار کلمه عبور جدید"
                                        outlined
                                        :rules="passwordConfirmationRules"
                                        dense
                                        class="input-group--focused pt-3"
                                        @click:append="show3 = !show3"
                                        v-model="form.password_confirmation"
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
                                                   @click="changePassword"
                                            >
                                                تغییر کلمه عبور <v-icon class="mr-2">mdi-lock-check</v-icon>
                                            </v-btn>
                                        </template>
                                    </div>
                                </v-form>
                            </v-card-text>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
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
        name: "ResetPassword",
        metaInfo: {
            title: 'بازیابی کلمه عبور -',
        },
        setup(props,{refs,root}){
            const show2= ref(false);
            const show3= ref(false);
            const form=ref({
                token: root.$route.params.token,
                email: null,
                password: null,
                password_confirmation: null,
            });
            const errors = ref({
                email: null,
                password: null,
            });
            const loading=ref(false);
            const emailRules=ref([
                value => !! value || 'ایمیل را وارد کنید.',
                value => /^([a-zA-Z0-9]([\.\w]*)@([\w]{2,9}[\.])[a-zA-Z]{2,4})$/.test(value) || 'یک ایمیل درست را وارد کنید.',
                value => (value ? value.length <= 255 : false) || 'طول ایمیل نباید بیشتر از 255 کاراکتر باشد.'
            ]);
            const passwordRules=ref([
                value => !! value || 'این فیلد ضروری است.',
                value => (value ? value.length >= 5 : false) || 'کلمه عبور بیشتر از 5 کاراکتر باشد.',
            ]);
            const passwordConfirmationRules=ref([
                value => !! value || 'این فیلد ضروری است.',
                value => (value ? value.length >= 5 : false) || 'کلمه عبور بیشتر از 5 کاراکتر باشد.',
                value => (value ? value==form.value.password : false) || 'کلمه عبور با تکرار آن همخوانی ندارد.'
            ]);

            function changePassword() {
                if(refs.resetPassword.validate()) {
                    loading.value = true;
                    store.dispatch('resetPassword',form.value)
                        .then(() => {
                            root.$router.push({ name: 'home' })
                        })
                        .catch((error) => {
                            errors.value.email = error.response.data.errors.email[0]
                             })
                        .finally(() => loading.value = false)
                }
            }


            return{
                form,
                errors,
                loading,
                show2,
                show3,
                emailRules,
                passwordRules,
                passwordConfirmationRules,
                changePassword
            }
        }
    }
</script>

<style scoped>

</style>
