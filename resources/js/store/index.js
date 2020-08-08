import Vue from 'vue/dist/vue.common.js';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
            user: window.user,
            isLoggedIn: !! window.user,
            draft: null,
            drafts: null,
            drafts_count: null,
            post: null,
            posts: null,
            posts_count: null,
            comment:'',
        unreadNotificationCount: 0,
            categories: []

        },
    mutations:{
        //AUTH
        LOGOUT(state){
            state.isLoggedIn=false,
                state.user=null
        },
        LOGIN(state, payload){
            state.isLoggedIn=true;
            state.user={
                name: payload.name,
                isVerified: payload.email_verified_at==null ? 1 : 2,
                username: payload.username,
                id: payload.id,
                profile_src: payload.profile_src
            }
        },
        REGISTER(state, payload){
            state.isLoggedIn=true;
            state.user={
                id:payload.id,
                name:payload.name,
                username: payload.username,
                isVerified: 1
            }
        },

        //USER
        RESET_PASSWORD(state, payload){
            state.isLoggedIn=true;
            state.user={
                name: payload.name,
                isVerified: payload.email_verified_at==null ? 1 : 2,
                username: payload.username,
                id: payload.id,
                profile_src: payload.profile_src

            }
        },
        RESET_NAME(state, user ){
            state.user={
                name: user.name,
                isVerified: user.isVerified==null ? 1 : 2,
                username: user.username,
                id: user.id,
                profile_src: user.profile_src
            }
        },

        RESET_PROFILE(state, profile_src){
            state.user.profile_src=profile_src
        },

        //DRAFTS
        SET_DRAFT(state, data) {
            state.draft = data;
        },

        SET_ALL_DRAFTS(state, data) {
            state.drafts = data;
        },
        SET_DRAFTS_COUNT(state, data) {
            state.drafts_count = data;
        },
        DELETE_DRAFT(state, index) {
            state.drafts.splice(index, 1);
            state.drafts_count--;
        },

        //POSTS

        SET_POST(state, data) {
            state.post = data;
        },
        SET_ALL_POSTS(state, data) {
            state.posts = data;
        },
        SET_POSTS_COUNT(state, data) {
            state.posts_count = data;
        },
        DELETE_POST(state, index) {
            state.posts.splice(index, 1);
            state.posts_count--;
        },

        //COMMENT
        SET_COMMENT(state,data){
            state.comment = data;
        },

        //NOTIFICATION
        SET_UNREAD_NOTIFICATION_COUNT(state,count){
            state.unreadNotificationCount=count;
        },

        // FRONTNAVBARCATEGORIES

        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        }


    },
    actions: {
        //AUTH
        logout({commit}) {
            return axios.post('/logout')
                .then(() => {
                    commit('LOGOUT')
                })
        },
        login({commit}, form) {
            return axios.post('/login', form)
                .then(({data}) => {
                    commit('LOGIN', data.data)
                })
        },
        register({commit}, form) {
            return axios.post('/register', form)
                .then(({data}) => {
                    commit('REGISTER', data.data)
                })
        },

        //USER
        resetPassword({commit}, form) {
            return axios.post('/api/password/reset', form)
                .then(async () => {
                    let response = await axios.get('/api/me');
                    commit('RESET_PASSWORD', response.data);
                })

        },
        sendEmail(context, form) {
           return axios.post('/api/password/email', form);
        },
        changeName({commit}, {
            name,
            isVerified,
            username,
            id,
            profile_src,
        }) {
            const user={name,isVerified,username,id,profile_src};
            commit('RESET_NAME',user)
        },

        changeProfile({commit},{profile_src}){
            commit('RESET_PROFILE',profile_src)
        },

        //DRAFTS
        async saveDraft({ commit }, {
            requestType,
            requestURI,
            title,
            content,
            draftId
        }) {
            await axios.get('/sanctum/csrf-cookie');
            const data = { title, content, draftId };

            commit("SET_DRAFT", data);
            return axios[requestType](requestURI, data)
        },
        async getDraft({ commit, state }, link) {
            if (state.draft == null) {
                let response = await axios.get(`/api/drafts/${link}`);
                const data = {
                    title: response.data.title,
                    content: response.data.content,
                    draftId: response.data.id,
                };
                commit('SET_DRAFT', data);
            }

            return state.draft;
        },

        async savePost({ commit }, form) {
            let response = await axios.post('/api/posts', form);

            commit('SET_POST', response.data.data);

            return response;
        },

        async fetchAllDrafts({ commit, state }) {
                let { data } = await axios.get('/api/posts/all-drafts');
                commit('SET_ALL_DRAFTS', data.data);
                commit('SET_DRAFTS_COUNT', data.drafts_count);
                commit('SET_POSTS_COUNT', data.posts_count);
        },
        async deleteDraft({ commit }, { index, link }) {
            await axios.delete(`/api/drafts/${link}`);
            commit('DELETE_DRAFT', index);
        },



        //POSTS

        async updatePost({ commit }, { title, content, slug }) {
            await axios.get('/sanctum/csrf-cookie');
            const data = { title, content };

            commit("SET_POST", data);

            return axios.patch(`/api/posts/${slug}/edit`, data);
        },

        async editPost({ commit }, form) {
            let response = await axios.patch(`/api/posts/${form.slug}`, form);

            commit('SET_POST', response.data.data);

            return response;
        },
        async fetchAllPosts({ commit, state }) {
                let { data } = await axios.get('/api/posts/all-posts');
                commit('SET_ALL_POSTS', data.data);
        },
        async deletePost({ commit }, { index, slug }) {
            await axios.delete(`/api/posts/${slug}`);
            commit('DELETE_POST', index);
        },

        //COMMENT
        setComment({commit}, content) {

                    commit('SET_COMMENT', content);

        },

        //NOTIFICATION
        setUnreadNotificationCount({commit}, count) {

            commit('SET_UNREAD_NOTIFICATION_COUNT', count);

        },

        //FRONTNAVCATEGORIES
        async getNavbarCategories({ commit, state }) {
            if (state.categories.length === 0) {
                let { data } = await axios.get('/api/navbar-categories');
                commit('SET_CATEGORIES',data.data);
                return;
            }
        }
    }
})
