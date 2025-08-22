const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const db  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '12345678',
  database        : 'FriendsNetwork'
});

console.log(app)

app.listen(8080, () => {
      console.log('server listening on port 8080')
})

app.get('/testUser', (req, res) => {
      db.query("INSERT INTO users (username, password) VALUES ('Testing', '123')", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            console.log(result)
        }
      })
})

app.post('/signup', (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send({username: username} )
        }
    })
})