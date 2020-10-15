var app = require('../app');

app.use(function*(next) {
    if (this.request.path !== '/') return yield* next;

    this.response.body = 'This is an example Koa Test';
})