var express = require('express');
var db = require('./msql');
var bparser = require('body-parser');
var app = module.exports = express();
var router = express.Router();

app.use(bparser.urlencoded({extended: true}));
app.use(bparser.json());

router.get('/', function(req, res){
    res.redirect('/query');
});

router.get('/query', function(req, res){
    var select = 'SELECT * FROM user';

    var query_user = function(rets){
        res.json({'result': true, 'data': rets});
    }
    db.query(select, query_user);
    db.conn().end();
});

router.post('/add', function(req, res){
    // 传惨方式：x-www-form-urlencoded
    console.log(req.body, 9999);
    res.json({'result': true, 'msg': 'ok'});
});

app.use('', router);

app.listen(3000);

