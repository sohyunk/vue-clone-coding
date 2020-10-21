import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import FriendInfo from '../components/FriendInfo.vue'
import Chat from '../components/Chat.vue'
import Hashtag from '../components/Hashtag.vue'
import More from '../components/More.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home},
        { path: '/info', component: FriendInfo, name: 'FriendInfo', props: true},
        { path: '/chat', component: Chat},
        { path: '/hashtag', component: Hashtag},
        { path: '/more', component: More},
    ]
})