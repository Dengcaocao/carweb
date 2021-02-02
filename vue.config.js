module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        port: 4180,
        proxy: {
            // 获取验证码接口
            [process.env.VUE_APP_LOGIN]: {
                target: process.env.VUE_APP_TARGET,
                changeOrigin: true,
                pathRewrite: {
                    [`^${process.env.VUE_APP_LOGIN}`]: ''
                }
            },
            // web-api
            [process.env.VUE_APP_WEBAPI]: {
                target: process.env.VUE_APP_WEBAPI_TARGET,
                changeOrigin: true,
                pathRewrite: {
                    [`^${process.env.VUE_APP_WEBAPI}`]: ''
                }
            }
        }
    }
}