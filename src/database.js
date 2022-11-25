const mysql = require("mysql");

const mysqlConnection =mysql.createConnection({
    
    host: "database-for-api.cssehb1a6je1.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "0011ffedimax",
    database: "mydb",
});

mysqlConnection.connect(function (err){

    if(err){
        console.log(err);
        return;
    }else{
        console.log('Base de datos conectada Correctamente !!');
    }

});

module.exports=mysqlConnection;