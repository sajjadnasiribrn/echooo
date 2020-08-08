<template>
    <div>
    <v-speed-dial
        v-model="fab"
        bottom
        left
        fixed
        direction="top"

        transition="slide-y-reverse-transition"
    >
        <template v-slot:activator>
            <v-btn
                v-model="fab"
                color="red"
                dark
                fab
            >

                <v-icon v-if="fab">mdi-close</v-icon>
                <v-icon v-else> mdi-flash-outline</v-icon>
            </v-btn>
        </template>
        <v-btn
            fab
            dark
            small
            color="green"
            :to="{ name:'edit-posts', params: { slug: slug } }"
        >
            <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
            fab
            dark
            small
            color="red"
            @click="openDeletePostDialog(slug)"
        >
            <v-icon>mdi-delete</v-icon>
        </v-btn>

        <v-btn
            @click="$vuetify.goTo('#firstComment',options)"
            small
            fab
            color="blue darken-3"
            dark
        >

                <v-icon>mdi-comment-outline</v-icon>
        </v-btn>
    </v-speed-dial>
    <v-dialog v-model="deleteDialogPost"
              max-width="370px"
              persistent
    >
        <v-card>
            <v-card-text class="pt-3">
                                            <span class="title">
                                            آیا از حذف این نوشته مطمئن هستید؟
                                            </span>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="deleteDialogPost=!deleteDialogPost">بستن</v-btn>
                <v-btn @click="deletePost"
                       color="error"
                >تایید
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
    import { ref } from '@vue/composition-api';
    export default {
        name: "PostSpeedDialog",
        props: {
            slug: {
                type: String,
            }
        },
        setup(props,{root}){

            const fab=ref(false);
            const deleteDialogPost=ref(false);
            const openDeletePostDialog = () => {
                deleteDialogPost.value = true;
            };
            const deletePost = () => {
                axios.delete(`/api/posts/${ props.slug }`)
                .then(()=>{
                    deleteDialogPost.value = false;
                    root.$router.push('/posts/draft');
                })

            };


            return{
                deleteDialogPost,
                fab,
                openDeletePostDialog,
                deletePost,

            }
        }

    }
</script>

<style scoped>

</style>
