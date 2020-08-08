<template>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <p class="headline">{{ isEditing ? 'ویرایش دسته بندی' : 'ساخت دسته بندی' }}</p>
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <v-form ref="createCategory"
                            class="mt-10"
                    >
                        <v-text-field v-model="form.title"
                                      label="عنوان دسته بندی"
                                      outlined
                                      :rules="titleRules"
                        ></v-text-field>

                        <v-btn @click="save"
                               :loading="loading"
                               color="info"
                        >{{ isEditing ? 'ویرایش' : 'ذخیره' }}</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "CategoryCreateOrUpdate",

        metaInfo() {
            return {
                title: this.isEditing ? 'ویرایش دسته بندی' : 'ساخت دسته بندی'
            }
        },

        data() {
            return {
                loading: false,
                breadcrumbs: [
                    {
                        text: 'داشبورد',
                        disabled: false,
                        to: { name: 'admin-dashboard' },
                        exact: true
                    },
                    {
                        text: 'مدیریت دسته بندی ها',
                        disabled: false,
                        to: { name: 'admin-category-index' },
                        exact: true
                    },
                    {
                        text: 'ساخت دسته بندی',
                        disabled: true,
                        exact: true
                    },
                ],
                form: {
                    title: null
                },
                errors: {
                    title: null,
                },
                titleRules : [
                    value => !! value || 'عنوان دسته بندی مهم است',
                ],
            }
        },

        computed: {
            requestUrl() {
                return this.isEditing
                    ? `/api/admin/categories/${this.$route.params.id}`
                    : '/api/admin/categories'
            },
            requestType() {
                return this.isEditing ? 'patch' : 'post';
            },
        },

        created() {
            if (this.$route.params.id) {
                this.breadcrumbs[2].text = 'ویرایش دسته بندی';
                this.isEditing = true;
                axios.get(`/api/admin/categories/${this.$route.params.id}`)
                    .then(({ data }) => {
                        this.form.title = data.title;
                    });
            }
        },

        methods: {
            save() {
                this.loading=true;
                if (this.$refs.createCategory.validate()) {
                    axios[this.requestType](this.requestUrl, this.form)
                        .then(() => {
                            this.$router.push({ name: 'admin-category-index' });
                        }).catch(({ response }) => {
                        if (response.data.errors.title) {
                            this.errors.title = response.data.errors.title[0];
                        }
                    }).finally(()=>{
                        this.loading=false;
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
