<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="8">
                <br>
                <br>
                <template v-if="!isSuccess">
                    <SkeletonLoader></SkeletonLoader>
                </template>

                <v-form class="editor mx-4 body-text" v-else>
                    <v-textarea
                        class="f-big"
                        auto-grow
                        placeholder="عنوان ..."
                        v-model="title"
                        @input="updatePost"
                        rows="3"
                        row-height="20"
                    ></v-textarea>
                    <tiptap-editor class="mt-6 f-medium"
                                   @input="updatePost"
                                   v-model="content"
                                   ref="tiptap"
                    ></tiptap-editor>

                    <template v-if="loading">
                        <v-btn color="info"
                               class="mt-10"
                               rounded
                        >
                            <v-progress-circular color="white"
                                                 :indeterminate="true"
                            ></v-progress-circular>
                        </v-btn>
                    </template>
                    <template v-else>
                        <v-btn color="info"
                               class="mt-10"
                               v-if="showSavingPost"
                               @click.stop="savePost"
                        >
                            ویرایش نوشته&nbsp;<v-icon>mdi-content-save-all</v-icon>
                        </v-btn>
                    </template>


                </v-form>
                <br>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbars.saved"
                    top
                    :timeout="1300"
                    color="info"
        >
            تغییرات ذخیره شد...
            <v-btn text
                   @click.stop="snackbars.saved = false"
            >
                بستن
            </v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbars.error"
                    :timeout="0"
                    color="error"
        >
            متاسفانه در هنگام ذخیره تغییرات خطایی رخ داد.
            <v-btn text
                   @click.stop="snackbars.error = false"
            >
                بستن
            </v-btn>
        </v-snackbar>

    </v-container>
</template>

<script>
    import TiptapEditor from "../../components/TiptapEditor";
    import { debounce } from 'lodash';
    import { ref, reactive, computed } from '@vue/composition-api';
    import SkeletonLoader from "../../components/SkeletonLoader";

    export default {
        name: "Edit",
        metaInfo: {
            title: 'ویرایش نوشته -',
        },
        components: {
            SkeletonLoader,
            TiptapEditor
        },
        setup(props, { root, refs } ) {
            const title = ref('');
            const content = ref('');
            const isSuccess=ref(false);
            const snackbars = reactive({
                saved: false,
                error: false,
            });
            const loading=ref(false);
            const showSavingPost = computed(() => {
                return title.value && content.value;
            });

            axios.get(`/api/posts/${root.$route.params.slug}/edit`)
                .then(({ data }) => {
                    title.value = data.title;
                    content.value = data.content;
                    isSuccess.value=true;
                    refs.tiptap.editor.setContent(data.content);
                });


            const setContent = (event) =>  {
                content.value = event
            };
            const updatePost = debounce(function () {
                updatePostStore()
                    .then(({ data }) => {
                        snackbars.saved = true;
                    }).catch(() => {
                    snackbars.error = true
                })
            }, 2000);

            const savePost = () => {
                updatePost.cancel();
                loading.value=true;
                updatePostStore()
                    .then(({ data }) => {
                        root.$router.push(`/posts/${root.$route.params.slug}/update`);
                        loading.value=false;
                    }).finally(() => loading.value = false)
            };

            const updatePostStore = () => {
                isSuccess.value=true;
                return root.$store.dispatch('updatePost', {
                    title: title.value,
                    content: content.value,
                    slug: root.$route.params.slug
                })
            };

            return {
                title,
                content,
                snackbars,
                isSuccess,
                loading,
                showSavingPost,
                updatePost,
                setContent,
                savePost
            }
        }
    }
</script>

<style lang="scss">
    .editor {
        position: relative;

        &__floating-menu {
            position: absolute;
            z-index: 1;
            margin-top: -0.25rem;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.2s, visibility 0.2s;

            &.is-active {
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .editor p.is-editor-empty:first-child::before {
        content: attr(data-empty-text);
        float: right;
        color: #ffd600;
        pointer-events: none;
        height: 0;
        font-style: italic;
    }

    .f-big{
        font-size: 1.7rem;
        font-weight:700;
        line-height:1.5;
    }
    .f-medium{
        font-size: large;
    }
</style>
