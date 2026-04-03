//导入mysql模块
const mysql = require('mysql');

//创建MySQL数据库实例对象
const db = mysql.createPool({
    host:'127.0.0.1',   //数据库服务器所在的主机IP地址
    user:'root',        //登录数据库服务器的账号
    password:'root',    //登录数据库服务器的密码
    database:'test'     //登录的数据库名称
});

//测试mysql模块是否能正常工作
db.query('select 1',(err,results) => {
    if(err){
        return console.log(err.message);
    }
    console.log(results);
});

/*  
    补充知识点：
    如果出现下列错误
        ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client.
    则在命令行下执行下列语句（账号和密码需要根据实际情况填写）
        ALTER USER '账号'@'localhost' IDENTIFIED WITH mysql_native_password BY '密码';
        FLUSH PRIVILEGES;
*/