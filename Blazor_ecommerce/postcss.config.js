module.exports = {
    plugins: [
        require('postcss-easy-import')({ prefix: '_', extensions: ['.css', '.scss'] }),
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-nested')
    ]
}