var koa = require('koa');

var app = module.exports = new koa();


// dont't serve components in production
if (app.env !== 'production') {
    console.log(app.env)
    console.log('production')
}