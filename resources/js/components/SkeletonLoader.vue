<template>
    <div>
    <v-skeleton-loader
        boilerplate=boilerplate
        type="article"
        tile=tile
        class="mx-auto"
    ></v-skeleton-loader>
    <v-skeleton-loader
        boilerplate=boilerplate
        type="list-item-three-line"
        tile=tile
        class="mx-auto"
    ></v-skeleton-loader>
    <v-skeleton-loader
        boilerplate=boilerplate
        type="list-item-two-line"
        tile=tile
        class="mx-auto"
    ></v-skeleton-loader>
    </div>
</template>

<script>
    export default {
        name: "SkeletonLoader"
    }
</script>

<style scoped>

</style>
