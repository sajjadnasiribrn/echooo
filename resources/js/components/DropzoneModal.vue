<template>
    <v-dialog v-model="imageModal"
              max-width="360px"
    >
        <v-card>
            <v-card-title>
                <p>
                عکس خود را آپلود کنید
                </p><p>
                <span class="body-2 info--text">
                نکته: حجم عکس کمتر از 3 مگابایت باشد.
                </span>
            </p>
            </v-card-title>

            <vue-dropzone id="dropzone"
                          ref="dropzone"
                          :options="dropzoneOptions"
                          @vdropzone-success="upload"
            ></vue-dropzone>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="imageModal = false"
                       color="#616161"
                       dark
                >
                    بستن
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import VueDropzone from "vue2-dropzone";
    import {computed, ref} from '@vue/composition-api';
    export default {
        name: "DropzoneModal",
        components: {
            VueDropzone
        },
        setup(props, { emit,root }) {
            // state
            const dropzone = ref(null);
            const imageModal = ref(false);
            const imageCommand = ref(false);
            const dropzoneOptions = ref({
                url: `/api/upload-post-image/none}`,
                maxFiles: 2,
                addRemoveLinks: true,
                dictDefaultMessage: "برای آپلود اینجا کلیک کنید",
                headers: {
                    'X-CSRF-TOKEN': window.csrf_token
                }
            });

            // methods
            const showModal = (command) => {
                const link = root.$route.params.link ? root.$route.params.link : 'none';
                dropzoneOptions.value.url=`/api/upload-post-image/${link}`;
                imageModal.value = true;
                imageCommand.value = command
            };
            const upload = (file, response) => {
                const data = {
                    imageCommand: imageCommand.value,
                    attrs: {
                        src: response.data
                    }
                };
                emit('image', data);
                imageModal.value = false;
                imageCommand.value = null;

                dropzone.value.removeFile(file);
            };

            return {
                imageCommand,
                imageModal,
                dropzoneOptions,
                dropzone,
                showModal,
                upload
            }
        }
    }
</script>

<style scoped>

</style>
