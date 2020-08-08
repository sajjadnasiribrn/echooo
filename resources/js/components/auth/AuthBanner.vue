<template>
    <v-col cols="12" md="8" class="d-flex flex-column align-center justify-center">
        <v-img src="/img/logo2.png"
               max-height="430px"
        ></v-img>
        <span class="white--text font-weight-bold"
              :class="$vuetify.breakpoint.mdAndUp ? 'mt-10 display-1' : 'title'"
        >به وب اموز خوش امدید</span>
        <span class="mt-3 font-weight-bold hidden-sm-and-down">انشتین: قلم من از خودم باهوش تر است!</span>
    </v-col>
</template>


<script>
    export default {
        name: "AuthBanner"
    }
</script>

<style scoped>

</style>
