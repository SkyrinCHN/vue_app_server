const mysql = require("mysql");
var pool = mysql.createPool({
  host: "w.rdc.sae.sina.com.cn",
  port: "3306",
  user: "wn115jnmn4",
  password: "0l4kmh55zm2ik1i1423jmz0yhzykx4xlz13ywjj2",
  database: "app_skyrinbyliu",
  connectionLimit:"10"
})
module.exports = pool;