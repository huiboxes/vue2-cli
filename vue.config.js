module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            "/api": {
                target: "http://localhost:8070",
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    lintOnSave: false
}