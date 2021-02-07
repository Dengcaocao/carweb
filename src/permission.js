import router from "./router/index"

// router.beforeEach((to, from, next) => {
//     //1、获取token、
//     let carsToken = window.localStorage.getItem('cars-token')
//     //1.1如果没有获取到 则不让访问非登录页面 , 加载到登录页面　login
//     if (!carsToken) {
//         //没有获取到token
//         if (to.path !== '/login') {
//             next({ path: '/login' })
//         } else {
//             //请求登录页面
//             next()
//         }

//     } else {
//         //获取到token
//         // if (to.path === '/login') {
//         //     next()
//         // } else {
//         //     //请求非登录页面
//         //     if (userInfo) {
//         //         //进入目标路由
//         //         next()
//         //     } else {
//         //         //如果本地没有用户信息 就通过token获取
//         //     }
//         // }
//         next()
//     }
// })