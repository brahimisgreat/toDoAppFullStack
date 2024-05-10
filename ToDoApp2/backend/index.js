const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "list"
});

app.use(express.json());
app.use(cors());

db.connect((err) => {
    if(err){
        console.log(err)
    } else {
        console.log("Connected to the database")
    }
})

app.get('/', (req, res) => {
     const sql = "select * from lists";
    db.query(sql, (err, result) => {
        if(err){
            console.log(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
    
})

app.delete('/deleteTask', (req, res) => {
    const title = req.body.title;
    const sql = "delete from lists where title = ?";
    db.query(sql, title, (err, result) => {
        if(err){
            console.log(err)
        } else {
            console.log(result)
            res.send("Task deleted")
        }
    })
})

app.post('/addTask', (req, res) => {
    console.log(req.body)
    const title = req.body.title;
    const description = req.body.description;

    db.query("insert into lists values(? , ?)", [title, description], (err, result) => {
        if(err){
            console.log(err)
        } else {
            console.log(result)
            res.send("Values inserted")
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

