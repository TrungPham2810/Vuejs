import Home from './components/Home'

const User = resolve => {
    require.ensure(['./components/user/User'], () => {
        resolve(require('./components/user/User'))
    }, 'user')
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail'], () => {
        resolve(require('./components/user/UserDetail'))
    }, 'user')
};

const UserStart = resolve => {
    require.ensure(['./components/user/Index'], () => {
        resolve(require('./components/user/Index'))
    }, 'user')
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit'], () => {
        resolve(require('./components/user/UserEdit'))
    }, 'user')
};

// import User from './components/user/User'
// import UserDetail from './components/user/UserDetail'
// import UserStart from './components/user/Index'
// import UserEdit from './components/user/UserEdit'

import PageHeader from './components/layout/Header'
import NotFound from './components/404'

export const routes = [
    {
        path: '/', name: 'home_page', components: {
            default: Home,
            'page-header': PageHeader
        }
    },
    {
        path: '/user', name: 'user', component: User,
        children: [
            {path: '', name: 'user_index', props: true, component: UserStart},
            {
                path: ':id', name: 'user_detail',
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                    console.log('beforeEnter');
                    next();
                }


            },
            {path: 'edit/:id', name: 'user_edit', component: UserEdit},
        ],
    },

    {
        path:'/auth-redirect', redirect:{name:'home_page'}
    },
    {
        path:'/404', name:'not_found', component: NotFound
    },

    {
        path:'*', redirect:{name:'not_found'}
    },

];
