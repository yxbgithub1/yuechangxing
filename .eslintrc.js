module.exports = {
    root: true,
    globals: { wx: true },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.wpy files
    plugins: [
        'html'
    ],
    settings: {
        'html/html-extensions': ['.html', '.wpy']
    },
    // add your custom rules here
    rules: {
        'indent': [2, 4, {
            "SwitchCase": 1
        }], //4个空格缩进
        'comma-style': ["error", "first", {
            "exceptions": {
                "ArrayExpression": true,//忽略数据和对象字面的逗号格式
                "ObjectExpression": true
            }
        }],
        "semi": [2, "never"], //不使用分号结尾
        'no-floating-decimal': [2], //填写完整的小位数
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "space-before-function-paren": ["error", "never"],
    }
}
