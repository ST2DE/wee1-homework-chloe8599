const express = require('express');
const app = express(); //建立一個Express伺服器

app.listen(3000); //告訴server聽取3000這個Port

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send(req.query.name)
});

app.get('/about_me', function(req, res) {
    res.render('index', { name: req.query.name });
});
app.use( express.static( "public" ) );