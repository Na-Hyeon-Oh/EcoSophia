const postcssNormalize = require('postcss-normalize');

module.exports = {
    parser: 'postcss-scss',
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: 'no-2009'
            },
            stage: 0                            // css 문법 사용 가능
        }),
        require('autoprefixer'),
        require('postcss-custom-properties'),
        require('postcss-for'),
        require('postcss-import'),
        require('postcss-loader'),
        require('postcss-nesting'),
        require('postcss-assets'),
        require('precss'),
        require('postcss-nested'),
        postcssNormalize()
    ]
};