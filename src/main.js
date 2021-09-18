import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import UsersList from './components/users/UsersList.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import FooterTeam from './components/teams/FooterTeams.vue';
import FooterUser from './components/users/FooterUser.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { path: '/users', components: { default: UsersList, footer: FooterUser } },
        {
            path: '/teams', components: { default: TeamsList, footer: FooterTeam }, children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },

            ]
        },
        // { path: '/teams', component: TeamsList, alias: '/' },
        { path: '/:notFound(.*)', component: NotFound }
        // { path: '/:notFound(.*)', redirect: '/teams' }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savePosition) {
        // console.log(from, to, savePosition)
        if (savePosition) {
            return savePosition
        }
        return { left: 0, top: 0 }
    },
});
// router.beforeEach(function (to, from, next) {
//     console.log('from:', from)
//     console.log('to', to)
//     next()
// })
router.afterEach(function () {

});
const app = createApp(App)
app.use(router)

app.mount('#app');