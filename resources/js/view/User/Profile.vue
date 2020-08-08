<template>
    <v-container>
        <v-overlay
            :absolute="true"
            :opacity="0.98"
            color="grey darken-4"
            :value="overlay"
        >
            <v-progress-circular color="#ffd600"
                                 indeterminate size="80"
                                 width="8"
            >

            </v-progress-circular>
        </v-overlay>
        <v-row align="center" justify="center" class="d-flex flex-column">
            <v-col col="12" md="8" class="mt-6">
                <v-form ref="form" v-if="user">
                    <div class="d-flex flex-row">
                        <v-avatar size="80px" class="mt-1">
                            <v-img :src="user.profile ? getProfileSrc : '/img/avatar.png'"
                                   id="pick-avatar"
                            ><v-icon>mdi-camera-plus</v-icon>
                            </v-img>

                            <avatar-cropper
                                @uploading="handleUploading"
                                @uploaded="handleUploaded"
                                @completed="handleCompleted"
                                @error="handlerError"
                                :upload-headers="headers"
                                :labels='labels'
                                :output-options='optionss'
                                trigger="#pick-avatar"
                                :upload-url='uploadUrl' />

                        </v-avatar>
                        <div class="d-flex flex-column mt-3 mx-2 mr-5 w-100">
                            <v-text-field label="نام"
                                          outlined
                                          v-model="user.name"
                                          :rules="nameRules"
                            ></v-text-field>
                            <v-textarea
                                        auto-grow
                                        outlined
                                        label="بیوگرافی"
                                        v-model="user.bio"
                                        counter
                                        :rules="bioRules"
                            ></v-textarea>
                        </div>
                    </div>
                    <v-divider class="my-12"></v-divider>
                    <div class="mx-3">
                        <h2>تنظیمات حساب کاربری</h2>
                        <div class="mt-7 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title mt-3">نام کاربری</span>
                            </div>
                            <v-spacer></v-spacer>
                            <v-text-field :prefix="url"
                                          prepend-inner-icon="mdi-pencil"
                                          v-model="user.username"
                                          :rules="usernameRules"
                                          :error-messages="errors.username"
                                          class="ltr"
                            ></v-text-field>
                        </div>
                        <v-divider class="mt-5"></v-divider>

                        <div class="mt-5 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title mt-3">ایمیل</span>
                            </div>
                            <v-spacer></v-spacer>
                            <v-text-field
                                prepend-inner-icon="mdi-pencil"
                                          v-model="user.email"
                                          :rules="emailRules"
                                          :error-messages="errors.email"
                                          class="ltr"
                            ></v-text-field>
                        </div>
                        <v-divider class="mt-5"></v-divider>
                        <div class="mt-5 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title mt-3">تغییر کلمه عبور</span>
                            </div>
                            <v-spacer></v-spacer>
                            <v-text-field
                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show2 ? 'text' : 'password'"
                                outlined
                                v-model="user.password"
                                placeholder="کلمه عبور"
                                :rules="passwordRules"
                                @click:append="show2 = !show2"
                                class="ltr"
                            ></v-text-field>
                        </div>
                        <v-divider class="mt-5"></v-divider>
                        <div class="mt-5 d-flex flex-row">
                            <span class="title">دریافت ایمیل هنگام دنبال شدن </span>
                            <v-spacer></v-spacer>
                            <v-switch inset v-model="user.email_on_follow"></v-switch>
                        </div>
                        <v-divider class="mt-5"></v-divider>
                        <div class="mt-5 d-flex flex-row">
                            <span class="title">دریافت ایمیل لایک ها </span>
                            <v-spacer></v-spacer>
                            <v-switch inset v-model="user.email_on_like"></v-switch>
                        </div>
                        <v-divider class="mt-5"></v-divider>
                        <div class="mt-5 d-flex flex-row">
                            <span class="title">دریافت ایمیل کامنت ها </span>
                            <v-spacer></v-spacer>
                            <v-switch inset v-model="user.email_on_reply"></v-switch>
                        </div>
                        <div class="d-flex flex-row mt-8">
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
                                       @click="update"
                                >
                                    ذخیره تغییرات<v-icon class="mr-2">mdi-content-save</v-icon>
                                </v-btn>
                            </template>
                        </div>
                        <div class="d-flex flex-row mt-8">
                            <v-spacer></v-spacer>
                            <v-alert
                                v-model="alert.show"
                                border="left"
                                elevation="2"
                                close-text="Close Alert"
                                :color="alert.color"
                                dark
                                dismissible
                            >
                                <span class="body-2">{{alert.message}}</span>
                            </v-alert>
                        </div>
                    </div>
                </v-form>
            </v-col>
            <v-snackbar v-model="snackbars.uploadEvent"
                        top
                        :timeout="2000"
                        color="info"
            >
                {{message}}
                <v-btn text
                       @click.stop="snackbars.uploadEvent = false"
                >
                    بستن
                </v-btn>
            </v-snackbar>
            <v-snackbar v-model="snackbars.error"
                        :timeout="0"
                        color="error"
            >
                {{message}}
                <v-btn text
                       @click.stop="snackbars.error = false"
                >
                    بستن
                </v-btn>
            </v-snackbar>
        </v-row>
    </v-container>
</template>

<script>
    import {ref, computed } from '@vue/composition-api';
    import store from '../../store';
    import AvatarCropper from "vue-avatar-cropper";
    export default {
        components: { AvatarCropper },
        name: "Profile",
        metaInfo: {
            title: 'پروفایل من -',
        },

        setup(props,{root}){
            const optionss=ref({
                width: 600, height: 600
            });
            const snackbars = ref({
                uploadEvent: false,
                error: false,
            });
            const uploadUrl=ref('/api/profile/upload-avatar');
            const headers=ref({
                'X-CSRF-TOKEN': window.csrf_token
            });
            const labels=ref({
                submit : 'ذخیره',
                cancel : 'انصراف'
            });
            const message=ref('');
            const loading = ref(false);
            const alert=ref({
                show:false,
                message:'',
                color:'green'
            });
            const form=ref(null);
            const show2=ref(false);
          const user=ref(null);
          const overlay=ref(true);
          const errors=ref({
               email:null,
              username:null,
            });
          const url=computed(()=>{
              return process.env.MIX_APP_URL + '/';
          });
            const getProfileSrc = computed(() => {
                 return `/profiles/${user.value.profile}`;
            });
            const nameRules=ref([
                value => !! value || 'نام مهم است',
            ]);
            const usernameRules=ref([
                value => !! value || 'نام کاربری مهم است',
                 ]);
            const emailRules=ref([
                value => !! value || 'ایمیل مهم است',
                value => root.$msValid.validEmail(value) || 'یک ایمیل درست را وارد کنید',
                  ]);
            const passwordRules=ref([
                value => (value ? value.length >= 5 : true) || 'کلمه عبور بیشتر از 5 کاراکتر باشد',
            ]);

            const bioRules=ref([
                v => (v ? v.length <= 100 : false) || 'نکته: بیوگرافی حداکثر 100 کاراکتر باشد.'
            ]);


            const fullUsername=computed(()=>{
              return url.value + user.value.username;
          });
          const getUser=()=>{
              axios.get('/api/me')
                  .then(({ data }) => {
                      overlay.value=false;
                      user.value = data;
                      const old = user.value.profile ? user.value.profile : 'none';
                      uploadUrl.value='/api/profile/upload-avatar/' + old
                  })
          };

            const update = () => {
                if (form.value.validate()) {
                    loading.value = true;
                    axios.patch('/api/profile', user.value)
                        .then(({ data }) => {
                            store.dispatch('changeName', {
                                name: data.name,
                                isVerified: data.email_verified_at,
                                username: data.username,
                                id: data.id,
                                profile_src: data.profile_src
                            });
                            errors.value = {
                                email: null,
                                username: null,
                            };
                            user.value.old_profile=data.profile;
                            alert.value.show=true;
                            alert.value.color='green';
                            alert.value.message='تغییرات با موفقیت ذخیره شد.';
                        })
                        .catch(({ response }) => {

                            alert.value.show=true;
                            alert.value.color='error';

                            for (const index in response.data.errors) {
                                errors.value[index] = response.data.errors[index][0];
                                alert.value.message=response.data.errors[index][0];
                            }

                        })
                        .finally(() => loading.value = false)
                }
            };

            //Cropper

            const handleUploading= (form, xhr) => {
                snackbars.value.uploadEvent=true;
                message.value = "در حال بار گذاری...";
            };
            const handleUploaded= (response) => {
                if (response.status == "success") {
                    snackbars.value.uploadEvent=true;
                    message.value = "تصویر ذخیره شد.";
                }
            };
            const handleCompleted= (response, form, xhr) => {
                user.value.profile = response.url;
                const old = response.url ? response.url : 'none';
                uploadUrl.value='/api/profile/upload-avatar/' + old;
                snackbars.value.upladEvent=true;
                message.value = "تصویر پروفایل شما عوض شد.";
                store.dispatch('changeProfile', {
                    profile_src: `profiles/${response.url}`
                });

            };

            const handlerError= (message, type, xhr) => {
                if (type=='upload') {
                    snackbars.value.uploadEvent = false;
                    message.value = 'خطایی رخ داد؛ لطفا دوباره امتحان کنید.';
                    snackbars.value.error = true;
                }
            };

            // created hook
            getUser();

            return {
                optionss,
                snackbars,
                getProfileSrc,
                uploadUrl,
                headers,
                labels,
                message,
                user,
                overlay,
                loading,
                alert,
                show2,
                errors,
                url,
                form,
                fullUsername,
                nameRules,
                usernameRules,
                emailRules,
                passwordRules,
                getUser,
                bioRules,
                handleUploaded,
                handleCompleted,
                handlerError,
                handleUploading,
                update,
            }

        },

    }
</script>

<style scoped>

</style>
