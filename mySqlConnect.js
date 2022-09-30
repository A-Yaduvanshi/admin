var mysql = require('mysql');

var con = mysql.createConnection({
host: 'localhost',
port: 3307,
database: 'ev',
user: 'root',
password: ''
});
// local api

const connect = () =>{
con.connect(function(err) {

        console.log(err);

});
}
module.exports =  {
  connect,
  con,
};
