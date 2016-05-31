var mysql = require('mysql');
var db = module.exports;

db.dbname = 'chat';
db.tables = [{
    'tbl': 'user',
    'fields': [
        {'key': 'id', 'value': 'INT(11) NOT NULL'},
        {'key': 'account', 'value': 'VARCHAR(255)'},
        {'key': 'name', 'value': 'VARCHAR(255)'},
        {'key': 'created', 'value': 'DATETIME'},
        {'key': 'PRIMARY KEY', 'value': '(id)'}
    ]
}];

db.conn = function(){
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'nodejs',
        port: 3306
    });
    return conn;
}

db.connection = function(){
    db.conn().connect(function(err){
        if(err){
            console.log('[query] - :' + err);
            throw err;
        }
    })
}

db.query = function(sql, callback){
    db.connection();
    db.conn().query(sql, function(err, results){
        if(err && err.number != db.conn.ERROR_DB_CREATE_EXISTS){
            throw err;
        }
        if(callback){
            callback.apply(this, [results]);
        }
    })
}

//var create = 'CREATE TABLE IF NOT EXISTS ' + db.tables[0]['tbl'] + '(id INT(11) NOT NULL, ' +
//        'account VARCHAR(255), name VARCHAR(255), ' +
//        'created DATETIME, PRIMARY KEY (id))';
//db.query(create);
//
//var insert = 'INSERT INTO ' + db.tables[0]['tbl'] +' SET id = ?, account = ?, name = ?, created = ?';
//var params = [2, 'super2@163.com', 'super2', '2015-08-16 10:00:23'];
//db.query(insert, params);

db.conn().end();

