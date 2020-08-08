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
                                <span class="display-1">بازیابی کلمه عبور</span>
                            </v-card-title>

                            <v-card-text>
                <span class="body-1">
                    برای بازیابی کلمه عبور ایمیل خود را وارد کنید:
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
                                    <div class="d-flex">
                                        <v-spacer></v-spacer>
                                        <template v-if="loading && !sended">
                                            <v-btn color="info"
                                                   class="px-6"
                                                   rounded
                                            >
                                                <v-progress-circular color="white"
                                                                     :indeterminate="true"
                                                ></v-progress-circular>
                                            </v-btn>
                                        </template>
                                        <template v-else-if="!loading && !sended">
                                            <v-btn color="info"
                                                   class="px-6"
                                                   rounded
                                                   @click="sendEmail"
                                            >
                                                ارسال ایمیل بازیابی <v-icon class="mr-2">mdi-email</v-icon>
                                            </v-btn>
                                        </template>
                                        <template v-else-if="sended">
                                            <v-btn color="green"
                                                   class="px-6"
                                                   rounded
                                            >
                                                ایمیل بازیابی برای شما ارسال شد.
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
    import { ref } from '@vue/composition-api';
    export default {
        name: "ResetEmailPassword",
        metaInfo: {
            title: 'فراموشی کلمه عبور -',
        },
        setup(props, { refs,root }){
              const form=ref({
              email:null,
              });
              const errors=ref({
                 email:null
              });
              const loading=ref(false);

            const sended = ref(false);

            const emailRules=ref([
                value => !! value || 'ایمیل را وارد کنید.',
                value => /^([a-zA-Z0-9]([\.\w]*)@([\w]{2,9}[\.])[a-zA-Z]{2,4})$/.test(value) || 'یک ایمیل درست را وارد کنید.',
                value => (value ? value.length <= 255 : false) || 'طول ایمیل نباید بیشتر از 255 کاراکتر باشد.'
            ]);

            function sendEmail() {
                if(refs.resetPassword.validate()) {
                    loading.value = true;
                    root.$store.dispatch('sendEmail',form.value)
                        .then(() => sended.value = true)
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
                emailRules,
                sended,
                sendEmail
            }
        }
    }
</script>

<style scoped>

</style>
