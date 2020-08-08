<template>
    <div>
<admin-navbar @show-navigation="drawer = !drawer"
></admin-navbar>
    <admin-navigation-drawer :drawer="drawer"></admin-navigation-drawer>
    <router-view></router-view>
    <footer></footer>
    </div>
</template>

<script>
    import AdminNavbar from "../../components/AdminNavbar";
    import AdminNavigationDrawer from "../../components/AdminNavigationDrawer";
    import Footer from "../../components/Footer";
    export default {
        name: "AdminLayout",
        components: {Footer, AdminNavigationDrawer, AdminNavbar},
        data() {
            return {
                drawer: true,
            }
        }
    }

</script>

<style scoped>

</style>
