var request = require('supertest');

var server = require('../serve');

describe('App', function() {
    it('should serve /', function(done) {
        request(server)
            .get('/')
            .expect('Content-Type', 'text/plain; charset=utf-8')
            .expect(200, done);
    })
})