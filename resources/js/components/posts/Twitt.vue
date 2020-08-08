<template>
    <div>
    <span class="display-1 cyan--text">پیشخوان:</span>
    <v-card
        class="mt-5"
        color="#26c6da"
        dark
        flat
        tile
    >
        <v-card-title>
            <v-icon
                large
                left
            >
                mdi-newspaper-variant-outline
            </v-icon>
        </v-card-title>
        <v-window v-model="onboarding">
            <v-window-item
                v-for="(item,i) in items"
                :key="i"
            >
                <v-card
                    color="transparent"
                    height="295"
                    flat
                >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        tag="v-card-text"
                    >
                        <v-card-text class="headline font-weight-bold">
                            <p>
                                <span>
                            {{item.text}}
                                <v-icon large>{{item.icon}}</v-icon>
                                </span>
                            </p>
                            <p
                                v-if="item.btnName"
                                class="text-center"
                            >
                                <v-btn
                                :to="item.btn"
                                class="mt-3"
                                >
                                    {{item.btnName}}
                                </v-btn>
                            </p>
                        </v-card-text>
                    </v-row>
                </v-card>
            </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
            <v-btn
                text
                @click="prev"
            >
                قبلی
            </v-btn>
            <v-item-group
                v-model="onboarding"
                class="text-center"
                mandatory
            >
                <v-item
                    v-for="(item,i) in items"
                    :key="i"
                    v-slot:default="{ active, toggle }"
                >
                    <v-btn
                        :input-value="active"
                        icon
                        @click="toggle"
                    >
                        <v-icon>mdi-record</v-icon>
                    </v-btn>
                </v-item>
            </v-item-group>
            <v-btn
                text
                @click="next"
            >
                بعدی
            </v-btn>
        </v-card-actions>
    </v-card>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "Twitt",
        data(){
            return{
                items: [
                    {
                        text: '',
                        icon:'',
                        btn: {},
                        btnName: ''
                    },
                    {
                        text: '',
                        icon:'',
                        btn: {},
                        btnName: ''
                    },
                ],
                length: 3,
                onboarding: 0,
            }
        },
        computed:{
            ...mapState({
                auth:state=>state.isLoggedIn,
                user:state=>state.user.name,
            }),

        },
        created() {
            if( this.auth ){
                this.items[0].text=this.user + ' عزیز به وبلاگ اِکو خوش آمدی';
                this.items[0].icon='mdi-emoticon-excited-outline';

                this.items[1].text='اگر میخوای بفهمی دقیقا چی تو فکرته، راهی جز نوشتن نیست. پس شروع کن!';
                this.items[1].btn={name: 'create-posts'};
                this.items[1].btnName='نوشتن پست جدید'

            }else{
                this.items[0].text='سلام. خوش آمدی';
                this.items[0].icon='mdi-emoticon-excited-outline';

                this.items[1].text='اینجا می تونی در باره هر چیزی دوست داری بنویسی. پس ثبت نام کن و بنویس!';
                this.items[1].btn={ name: 'register' };
                this.items[1].btnName='ثبت نام'
            }
        },
        methods: {
            next () {
                this.onboarding = this.onboarding + 1 === this.length
                    ? 0
                    : this.onboarding + 1
            },
            prev () {
                this.onboarding = this.onboarding - 1 < 0
                    ? this.length - 1
                    : this.onboarding - 1
            },
        },
    }
</script>

<style scoped>

</style>
