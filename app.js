const fs = require('fs');
const express = require('express');
const app = express();

const database = JSON.parse(fs.readFileSync('./database.json'));

app.use(express.json());
app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));

app.get('/blogs/:blogNumber', function (req, resp) {
    const n = req.params.blogNumber;
    const blogID = 'Blog' + n;
    resp.json(database.Blogs[blogID]);
});

app.get('/blog', function (req, resp) {
    const searchTerm = req.query.search_term;
    const searchBlogs = [];
    // eslint-disable-next-line eqeqeq
    if (searchTerm == '') {
        resp.send(searchBlogs);
        return;
    }
    for (const blog of Object.entries(database.Blogs)) {
        if (blog[1].Description.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchBlogs.push(blog);
        }
    };
    resp.send(searchBlogs);
});

app.get('/authors/:authorNumber', function (req, resp) {
    const n = req.params.authorNumber;
    const authorID = 'Author' + n;
    resp.json(database.Authors[authorID]);
});

app.post('/comments/new', function (req, resp) {
    const form = req.body;

    if (form.Blog && form.Name && form.Text) {
        const n = form.Blog;
        const blogID = 'Blog' + n;
        delete form.Blog;

        database.Blogs[blogID].Comments.push(form);

        fs.writeFile('./database.json', JSON.stringify(database, null, 2), err => {
            if (err) console.log('Error writing file:', err);
        });

        resp.send(database.Blogs[blogID]);
        return;
    }
    resp.send('Invalid comment');
});

app.post('/blogs/new', function (req, resp) {
    const form = req.body;
    const blogDetail = form;
    const databaseBlogs = database.Blogs;

    if (blogDetail.Title && blogDetail.AuthorID && blogDetail.Date && blogDetail.Type && blogDetail.Image && blogDetail.Brief && blogDetail.Description && blogDetail.Comments) {
        const databaseLastBlogID = Object.keys(databaseBlogs)[Object.keys(databaseBlogs).length - 1];
        const newBlogNum = parseInt(databaseLastBlogID.substring(4)) + 1;
        const newBlogID = 'Blog' + newBlogNum;

        database.Blogs[newBlogID] = form;

        fs.writeFile('./database.json', JSON.stringify(database, null, 2), err => {
                if (err) console.log('Error writing file:', err);
            });

        resp.send(newBlogID);
        return;
    }
    resp.send('Invalid Blog');
});

module.exports = app;
