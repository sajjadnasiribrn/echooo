<template>
    <v-system-bar height="50px"
                  class="d-flex justify-center">
        <div v-if="sended">
            <span class="mr-5 success--text"
            >ایمیل ارسال شد.</span>
        </div>
        <div v-else>
            <span>شما هنوز ایمیل خود را تایید نکرده اید</span>
                <template v-if="loading">
                    <v-progress-circular color="white"
                                         :indeterminate="true"
                    ></v-progress-circular>
                </template>
                <template v-else>
                    <v-btn class="mr-5"
                           outlined
                           rounded
                           small
                           @click = "resendVerify"
                    >
                        ارسال مجدد ایمیل
                    </v-btn>
                </template>
        </div>
    </v-system-bar>
</template>

<script>
    import { ref } from '@vue/composition-api';
    export default {
        name: "VerifyBanner",

        setup(){
            const loading=ref(false);
            const sended=ref(false);
            function resendVerify(){
                loading.value = true;
                axios.post('/api/email/resend')
                .then(()=>sended.value=true)
                .finally(() => loading.value = false)
            }
            return{
                sended,
                loading,
                resendVerify
            }

        }
    }
</script>

<style scoped>

</style>


