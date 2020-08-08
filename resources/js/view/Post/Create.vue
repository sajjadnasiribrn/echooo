<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="8">
                <br>
                <br>
                <template v-if="requestURI!='/api/posts/create' && !isSuccess">
                    <SkeletonLoader></SkeletonLoader>
                </template>

                <v-form class="editor mx-4 body-text" v-else>
                    <v-textarea
                        class="f-big"
                        auto-grow
                        placeholder="عنوان ..."
                        v-model="title"
                        @input="updateDraft"
                        rows="3"
                        row-height="20"
                    ></v-textarea>
                    <tiptap-editor class="mt-6 f-medium"
                                   @input="updateDraft"
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
                           v-if="showSavingDraft"
                           @click.stop="saveDraft"
                    >
                        ذخیره پیش نویس&nbsp;<v-icon>mdi-content-save-all</v-icon>
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
        name: "Create",
        metaInfo: {
            title: 'نوشتن پست جدید -',
        },
        components: {
            SkeletonLoader,
            TiptapEditor
        },
        setup(props, { root, refs }) {
            const title = ref('');
            const content = ref('');
            const isSuccess=ref(false);
            const requestType =  ref('post');
            const requestURI = ref('/api/posts/create');
            const draftId=ref(0);
            const snackbars = reactive({
                saved: false,
                error: false,
            });
            const loading=ref(false);
            const showSavingDraft = computed(() => {
                return title.value && content.value;
            });

            let link = root.$route.params.link;
            if(link) {
                requestType.value = 'patch';
                requestURI.value = '/api/drafts/' + link;
                axios.get(`/api/drafts/${link}`)
                    .then(({ data }) => {
                        title.value = data.title;
                        content.value = data.content;
                        draftId.value=data.id;
                        isSuccess.value=true;
                        refs.tiptap.editor.setContent(data.content);
                    })
            }


            const setContent = (event) =>  {
                content.value = event
            };
            const updateDraft = debounce(function () {
                updateDraftStore()
                    .then(({ data }) => {
                        if(requestType.value === 'post') {
                            history.replaceState({}, '', `/drafts/${data.link}`);
                            root.$route.params.link=data.link;
                            draftId.value=data.id;
                            requestURI.value = `/api/drafts/${data.link}`;
                        }
                        requestType.value = 'patch';
                        snackbars.saved = true;
                    }).catch(() => {
                    snackbars.error = true
                })
            }, 2000);

            const saveDraft = () => {
                updateDraft.cancel();
                loading.value=true;
                updateDraftStore()
                    .then(({ data }) => {
                        draftId.value=data.id;
                        const link = data.link ? data.link : `/drafts/${root.$route.params.link}`;
                        root.$router.push(`${link}/save`);
                        loading.value=false;
                    }).finally(() => loading.value = false)
            };

            const updateDraftStore = () => {
                isSuccess.value=true;
                return root.$store.dispatch('saveDraft', {
                    requestType: requestType.value,
                    requestURI: requestURI.value,
                    title: title.value,
                    content: content.value,
                    draftId: draftId.value,
                })
            };

            return {
                title,
                content,
                requestType,
                requestURI,
                snackbars,
                isSuccess,
                loading,
                showSavingDraft,
                setContent,
                updateDraft,
                saveDraft
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

