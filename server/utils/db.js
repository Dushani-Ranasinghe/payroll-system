import mysql, { createConnection } from "mysql"

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"salary_management"
})

con.connect(function(err){
    if(err){
        console.log("connection error",err)
    }else{
        console.log("Connected")
    }
})

export default con;