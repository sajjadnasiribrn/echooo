<template>
    <v-container>
        <v-row class="mt-3 mb-12">
            <template v-if="!isSuccess">
                <v-col cols="12">
                <SkeletonLoader></SkeletonLoader>
                </v-col>
            </template>
            <template v-else>
            <v-col cols="12" md="6">
                <p>ویرایش تصویر پیش نمایش:</p>
                <div class="text-center">
                    <v-btn
                        color="deep-orange accent-3"
                        @click="$refs.profile.click()"
                        class="white--text"

                    >
                        برای عوض کردن تصویر کلیک کنید&nbsp;<v-icon>mdi-camera-enhance</v-icon>
                    </v-btn>
                </div>
                <input type="file"
                       ref="profile"
                       style="display: none;"
                       @change="uploadImage"
                >
                <v-img :src="form.image"
                       v-if="form.image && form.image!='/img/posts/none'"
                       width="500px"
                       height="300px"
                       class="mt-5"
                ></v-img>
                <p class="mt-3 title">{{ form.title }}</p>
                <v-textarea placeholder="توضیحات..."
                            counter
                            v-model="form.description"
                            label="توضیحات نوشته"
                            :rules="descriptionRules"
                            auto-grow
                            outlined
                ></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
                <p>ویرایش دسته بندی های نوشته:</p>
                <span class="body-2 green--text">نکته: پس از نوشتن دسته بندی آن را با enter تایید کنید.</span>
                <v-combobox v-model="form.categories"
                            class="pt-1"
                            placeholder="دسته بندی ها"
                            multiple
                            chips
                            outlined
                            append-icon=""
                            hint="حداکثر 5 دسته بندی را اضافه کنید"
                            persistent-hint
                ><template v-slot:selection="data">
                    <v-chip
                        :key="JSON.stringify(data.item)"
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        :disabled="data.disabled"
                        @click:close="data.parent.selectItem(data.item)"
                    >
                        <v-avatar
                            class="accent white--text"
                            left
                            v-text="data.item.slice(0, 1).toUpperCase()"
                        ></v-avatar>
                        {{ data.item }}

                    </v-chip>
                </template></v-combobox>
                <div class="mt-5 d-flex flex-row">
                    <v-spacer></v-spacer>
                    <template v-if="loading">
                        <v-btn color="info"
                               rounded
                        >
                            <v-progress-circular color="white"
                                                 :indeterminate="true"
                            ></v-progress-circular>
                        </v-btn>
                    </template>
                    <template v-else>
                        <v-btn color="info"
                               @click="sendForm"
                        >
                            ذخیره تغییرات&nbsp;<v-icon>mdi-content-save-all-outline</v-icon>
                        </v-btn>
                    </template>
                </div>
            </v-col>
            </template>
        </v-row>
        <v-snackbar v-model="error.show"
                    v-for="(error, index) in errors"
                    :key="index"
                    color="error"
                    :timeout="0"
        >
            {{ error.text }}
            <v-btn @click="error.show = false"
                   text
            ><v-icon>mdi-window-close</v-icon></v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
    import { ref, watch } from '@vue/composition-api';
    import uploadBase64 from "../../module/file/uploadBase64";
    import SkeletonLoader from "../../components/SkeletonLoader";
    export default {
        name: "UpdatePost",
        components: {
            SkeletonLoader
        },
        metaInfo: {
            title: 'ویرایش نهایی نوشته -',
        },
        setup(props, { root }) {
            // state
            const isSuccess=ref(false);
            const form = ref({
                image: null,
                image_name: null,
                title: null,
                content: null,
                description: null,
                categories: [],
            });
            const loading=ref(false);
            const errors = ref([]);
            const descriptionRules=ref([
                v => (v ? v.length <= 160 : false) || 'نکته: لازم نیست توضیحات خیلی طولانی باشد چون حداکثر 50 کلمه آن نمایش داده می شود.'
            ]);

            axios.get(`/api/posts/${root.$route.params.slug}/edit`)
                .then(( { data } ) => {
                    form.value = data;
                    form.value.categories = data.categories_title;
                    isSuccess.value=true;
                });

            watch(
                () => form.value.categories,
                (value) => {
                    if (value.length > 5) {
                        form.value.categories.pop()
                    }
                }
            );

            // methods
            const uploadImage = (event) => {
                form.value.image_name = event.target.files[0].name;
                form.value.image = uploadBase64(event);
            };

            const sendForm = () => {
                loading.value=true;
                root.$store.dispatch('editPost', form.value)
                    .then(({ data }) => {
                        root.$router.push({ name: 'post-show', params: { slug: data.data.slug } })
                    })
                    .catch(({ response }) => {
                        Object.values(response.data.errors).forEach(e => {
                            errors.value.push({
                                text: e[0],
                                show: true,
                            })
                        })
                    }).finally(() => loading.value = false)
            };

            return {
                isSuccess,
                form,
                errors,
                loading,
                descriptionRules,
                sendForm,
                uploadImage
            }
        }
    }
</script>

<style scoped>

</style>
