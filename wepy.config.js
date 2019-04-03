const path = require('path')
var prod = process.env.NODE_ENV === 'production'

const resolvePath = (dir) => {
    return path.join(__dirname, `src/components/${dir}`)
}
const components = {
    page: resolvePath('page/page'),
    content: resolvePath('content/content'),
    avatar: resolvePath('avatar/avatar'),
    box: resolvePath('box/box'),
    grid: resolvePath('grid/grid'),
    grids: resolvePath('grid/grids'),
    banner: resolvePath('banner/banner'),
    swiper: resolvePath('swiper/swiper'),
    cell: resolvePath('cell/cell'),
    'cell-input': resolvePath('cell/cell-input'),
    navbar: resolvePath('navbar/navbar'),
    fixed: resolvePath('fixed/fixed'),
    'cell-group': resolvePath('cell/cell-group'),
    check: resolvePath('./form/check')
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
