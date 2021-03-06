const path = require('path')
var prod = process.env.NODE_ENV === 'production'

const resolvePath = (dir) => {
    return path.join(__dirname, `src/components/${dir}`)
}
const components = {
    'page-tabbar': resolvePath('page/page-tabbar'),
    page: resolvePath('page/page'),
    iconfont: resolvePath('icon/index'),
    tabbar: resolvePath('tabbar/tabbar'),
    content: resolvePath('content/content'),
    scroll: resolvePath('scroll/index'),
    container: resolvePath('container/index'),
    avatar: resolvePath('avatar/avatar'),
    box: resolvePath('box/box'),
    grid: resolvePath('grid/grid'),
    grids: resolvePath('grid/grids'),
    banner: resolvePath('banner/banner'),
    swiper: resolvePath('swiper/swiper'),
    tabbarSwiper: resolvePath('swiper/tabbar-swiper')
}

module.exports = {
    wpyExt: '.wpy',
    eslint: true,
    cliLogs: !prod,
    build: {
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            '@assets': path.join(__dirname, 'src/assets'),
            '@components': path.join(__dirname, 'src/components'),
            '@data': path.join(__dirname, 'src/data'),
            ...components
        },
        aliasFields: ['wepy', 'weapp'],
        modules: ['node_modules']
    },
    compilers: {
        less: {
            compress: prod
        },
        babel: {
            sourceMap: true,
            presets: [
                'env'
            ],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions'
            ]
        }
    },
    plugins: {
    },
    appConfig: {
        noPromiseAPI: ['createSelectorQuery']
    }
}

if (prod) {
    // 压缩sass
    // module.exports.compilers['sass'] = {outputStyle: 'compressed'}
    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {
            }
        },
        imagemin: {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    }
}
