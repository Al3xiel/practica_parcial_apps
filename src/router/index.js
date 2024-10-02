import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import ExaminerPerformanceOverviewComponent from "../nursing/pages/examiner-performance-overview.component.vue";
import NotFoundComponent from "../public/pages/not-found.component.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', name:'Home', component: HomeComponent},
        {path:'/nursing/examiner-performance-overview', name:'Examiner Performance Overview' ,component:ExaminerPerformanceOverviewComponent},
        {path: '/', redirect: '/home'},
        {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundComponent}
    ]
});
export default router;