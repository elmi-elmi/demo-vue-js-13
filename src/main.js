import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import UsersList from './components/users/UsersList.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { path: '/users', component: UsersList },
        {
            path: '/teams', component: TeamsList, children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },

            ]
        },
        // { path: '/teams', component: TeamsList, alias: '/' },
        { path: '/:notFound(.*)', component: NotFound }
        // { path: '/:notFound(.*)', redirect: '/teams' }
    ],
    linkActiveClass: 'active'
});
const app = createApp(App)
app.use(router)

app.mount('#app');