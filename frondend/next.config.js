/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['localhost', '127.0.0.1', 'api.zoloto.cx.ua'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `@import "variables.scss";`,
    },

}


module.exports = nextConfig
