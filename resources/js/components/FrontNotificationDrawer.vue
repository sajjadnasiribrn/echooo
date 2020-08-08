<template>
    <v-navigation-drawer app
                         width="350"
                         temporary
                         :value="value"
                         @input="changeDrawer"
    >
        <v-toolbar
        color="#ffd600"
        >
            <v-toolbar-title class="mr-5">
                <span class="font-weight-bold">
                    اطلاعیه ها
                      <v-btn icon>
                      <v-icon>mdi-alarm-bell</v-icon>
                      </v-btn>
                </span>
            </v-toolbar-title>
        </v-toolbar>
        <v-list>
            <div v-if="items.length>0">
                <template
                    v-for="item in items"
                >
                    <v-list-item :key="item.id">
                        <v-list-item-content>
                            <a :href="item.data.link"
                               class="pa-1 subtitle-2"
                               :class="{ 'grey--text caption': !! item.read_at }"
                               @click.prevent="readNotification(item)"
                            >{{ item.data.text }}</a>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider class="mx-4"></v-divider>
                </template>
            </div>
            <div
            v-else
            >
                <template>
                    <v-list-item>
                        <v-list-item-content>
                            <v-row class="justify-center">
                        <span
                            class="pa-1 subtitle-2"
                        >
                            شما هنوز اطلاعیه ای ندارید.
                        </span>
                            </v-row>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </div>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "FrontNotificationDrawer",

        props: ['value'],

        data() {
            return {
                items: [],
            }
        },

        created() {
            axios.get('/api/notifications')
                .then(({ data }) => {
                    this.items = data.data;
                    const unreadCount = data.data.filter(n => n.read_at === null).length;
                    this.$store.dispatch('setUnreadNotificationCount',unreadCount);
                })
        },

        methods: {
            changeDrawer(event) {
                this.$emit('input', event)
            },
            readNotification(notification) {
                axios.patch(`/api/notifications/${notification.id}`)
                    .then(() => {
                        this.$router.push(notification.data.link)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
