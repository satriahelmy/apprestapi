var mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    username : 'root',
    password : '',
    database : 'cobanode'
})

conn.connect(()=>{
    if(err) throw err;
    console.log('Mysql Terkoneksi');
})

module.exports = conn;