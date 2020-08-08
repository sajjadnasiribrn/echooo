<template>
    <div>
        <VerifyBanner v-if="user && user.isVerified==1"></VerifyBanner>
            <FrontNavbar
                @show-notification="showNotification = true"
            ></FrontNavbar>

        <front-notification-drawer
            v-model="showNotification"
        ></front-notification-drawer>

        <router-view></router-view>

        <Footer></Footer>
    </div>
</template>

<script>
    import FrontNavbar from "../../components/FrontNavbar";
    import Footer from "../../components/Footer";
    import VerifyBanner from "../../components/VerifyBanner";
    import {mapState} from 'vuex';
    import FrontNotificationDrawer from "../../components/FrontNotificationDrawer";
    export default {
        name: "FrontLayout",
        metaInfo: {
            titleTemplate: '%s اکو'
        },
        components: {FrontNotificationDrawer, VerifyBanner, Footer, FrontNavbar},
        data(){
            return{
                showNotification: false
            }
        },
        computed:{
            ...mapState({user:state=>state.user})
        }
    }
</script>

<style scoped>

</style>
