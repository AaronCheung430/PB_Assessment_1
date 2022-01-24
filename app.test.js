'use strict';

const request = require('supertest');
const app = require('./app');

const newCommentData = {Blog: 1, Name: "Steven", Text: "I can't wait for the new iPhone 14!!!"};
const newBlogData = {
    "Title": "iPhone 14 Pro now rumored to feature ‘hole + pill design’ instead of notch",
    "AuthorID": 1,
    "Date": "12.01.2022",
    "Type": [
      "text-primary",
      "<i class=\"fas fa-comment\"></i> Rumors"
    ],
    "Image": "img/iPhone-14.jpg",
    "Brief": "Your HTML code",
    "Description": "Your HTML code",
    "Comments": []
  };

describe('Test the blogs service', () => {
    test('GET the root path succeeds', () => {
        return request(app)
            .get('/')
            .expect(200);
    });

    test('GET the root path return HTML', () => {
        return request(app)
            .get('/')
            .expect('Content-type', /html/);
    });

    test('GET /blogs/1 succeeds', () => {
        return request(app)
            .get('/blogs/1')
            .expect(200);
    });

    test('GET /blogs/1 return JSON', () => {
        return request(app)
            .get('/blogs/1')
            .expect('Content-type', /json/);
    });

    test('GET /blogs/1 includes Title', () => {
        return request(app)
            .get('/blogs/1')
            .expect(/Title/);
    });

    test('GET /authors/2 succeeds', () => {
        return request(app)
            .get('/authors/2')
            .expect(200);
    });

    test('GET /authors/2 return JSON', () => {
        return request(app)
            .get('/authors/2')
            .expect('Content-type', /json/);
    });

    test('GET /authors/2 includes Twitter', () => {
        return request(app)
            .get('/authors/2')
            .expect(/Twitter/);
    });

    test('GET /blog?search_term=Apple succeeds', () => {
        return request(app)
            .get('/blog?search_term=Apple')
            .expect(200);
    });

    test('GET /blog?search_term=Apple return JSON', () => {
        return request(app)
            .get('/blog?search_term=Apple')
            .expect('Content-type', /json/);
    });

    test('GET /blog?search_term=Apple includes Twitter', () => {
        return request(app)
            .get('/blog?search_term=Apple')
            .expect(/Blog/);
    });

    test('POST /comments/new succeeds', () => {
        return request(app)
            .post('/comments/new')
            .send(newCommentData)
                .expect(200);
    });

    test('POST /comments/new return JSON', () => {
        return request(app)
            .post('/comments/new')
            .send(newCommentData)
                .expect('Content-type', /json/);
    });

    test('POST /comments/new includes Steven', () => {
        return request(app)
            .post('/comments/new')
            .send(newCommentData)
                .expect(/Steven/);
    });

    test('POST /blogs/new succeeds', () => {
        return request(app)
            .post('/blogs/new')
            .send(newBlogData)
                .expect(200);
    });

    test('POST /blogs/new return Text', () => {
        return request(app)
            .post('/blogs/new')
            .send(newBlogData)
                .expect('Content-type', /text/);
    });

    test('POST /blogs/new includes Blog', () => {
        return request(app)
            .post('/blogs/new')
            .send(newBlogData)
                .expect(/Blog/);
    });
});