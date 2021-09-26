import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'
import JobList from '../pages/jobs/Index.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/search',
    name: 'Search',
    component: Search
}, {
    path: '/jobs',
    name: 'JobList',
    component: JobList
}];

export default routes
