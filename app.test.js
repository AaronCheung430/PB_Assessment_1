'use strict';

const request = require('supertest');
const app = require('./app');

describe('Test the blogs service', () => {
    test('GET / succeeds', () => {
        return request(app)
	    .get('/')
	    .expect(200);
    });

    test('GET / return HTML', () => {
        return request(app)
	    .get('/')
	    .expect('Content-type', /html/);
    });

    test('GET /blogs/ succeeds', () => {
        return request(app)
	    .get('/blogs/1')
	    .expect(200);
    });

    test('GET /blogs/ return JSON', () => {
        return request(app)
	    .get('/blogs/1')
	    .expect('Content-type', /json/);
    });

    test('GET /authors/ succeeds', () => {
        return request(app)
	    .get('/authors/1')
	    .expect(200);
    });

    test('GET /authors/ return JSON', () => {
        return request(app)
	    .get('/authors/1')
	    .expect('Content-type', /json/);
    });

    // test('GET /random/  returns JSON', () => {
    //     return request(app)
	//     .get('/random/')
	//     .expect('Content-type', /json/);
    // });

    test('POST /comments/new succeeds', () => {
        const params = {Blog: 1, Name: "Steven", Text: "I can't wait for the new iPhone 14!!!"};
        return request(app)
            .post('/comments/new')
            .send(params)
            .expect(200);
    });

    test('POST /comments/new return JSON', () => {
        const params = {Blog: 1, Name: "Steven", Text: "I can't wait for the new iPhone 14!!!"};
        return request(app)
            .post('/comments/new')
            .send(params)
            .expect('Content-type', /json/);
    });
});