import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import UsersList from './components/users/UsersList.vue';
import TeamsList from './components/teams/TeamsList.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/users',
        component: UsersList
    },
    {
        path: '/teams',
        component: TeamsList
    }]
});
const app = createApp(App)
app.use(router)

app.mount('#app');