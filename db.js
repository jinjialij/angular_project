const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

var mysqlConn = mysql.createConnection({
    host: 'den1.mysql2.gear.host',
    user: 'formdata',
    password: 'Dh35?z?1NDKV',
    dbname: 'formdata'
});

mysqlConn.connect((err)=>{
    if(!err){
        console.log('DB connection succeed');
    }
    else{
        console.log('DB connection failed \n Error: '+JSON.stringify(err, undefined, 2));
    }
});

app.listen(3000, () => console.log('Server running on port 3000!'))

//get account
app.get('/api/login',(req,res)=>{
    mysqlConn.query('SELECT * FROM formdata.account;', (err, rows, fields)=>{
        if(!err){
            console.log(rows[0].email);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});

//get account email by id
app.get('/api/login/:id',(req,res)=>{
    mysqlConn.query('SELECT * FROM formdata.account WHERE id=? ;', [req.params.id], (err, rows, fields)=>{
        if(!err){
            console.log(rows[0].email);
            res.send(rows[0].email);
        }
        else{
            console.log(err);
        }
    })
});

//get account email by id
app.post('/api/login',(req,res)=>{    
    mysqlConn.query('SELECT * FROM formdata.account WHERE email=? AND password=?;', [req.body.password, req.body.email], (err, rows, fields)=>{
        if(!err){
            console.log(rows[0].email);
            res.status(200).json({status: 'ok'});
        }
        else{
            console.log(err);
            res.status(500).json({status: 'error'});
        }
    })
});

//insert new account
app.post('/api/register',(req,res)=>{
    let emp=req.body;
    var sql='INSERT INTO `formdata`.`account` (`first_name`, `last_name`, `password`, `email`) VALUES (?, ?, ?, ?)';
    mysqlConn.query(sql, [req.body.firstName, req.body.lastName, req.body.password, req.body.email], (err, rows, fields)=>{
        if(!err){
            console.log(rows);
            res.status(200).json({status: 'ok'});
        }
        else{
            console.log(err);
            res.status(500).json({status: 'error'});
        }
    })
});