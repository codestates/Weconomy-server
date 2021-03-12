require("dotenv").config();
const { GraphQLSchema } = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const db = require("./db");
const models = require('./models');
let options = {
  exclude: ["Users"]
}
const {generateSchema} = require('sequelize-graphql-schema')(options);



app.use(
    cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "OPTIONS"],
    })
);

app.use(
    '/graphql',
    graphqlHTTP({
      schema: new GraphQLSchema(generateSchema(models)),
      graphiql: true
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieParser());
app.get("/", (req,res)=>(res.send({messages: "hell world"})));

//REST API
app.post("/multiMeetJoin",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`INSERT into multiMeet(userId,meetId) values(${data.userId}, ${data.meetId});`) 
  res.send({messages: "ok"})
});

app.post("/meetContentJoin",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`INSERT into meetContent(contentId,meetId) values(${data.contentId}, ${data.meetId});`)
  res.send({messages: "ok"})
});


app.post("/meetContentDelete",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`delete from meetContent where meetId = ${data.meetId} and contentId = ${data.contentId};`)
  res.send({messages: "ok"})
});


app.post("/multiMeetDelete",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`delete from multiMeet where userId = ${data.userId} and meetId = ${data.meetId};`)
  res.send({messages: "ok"})
});

app.post("/meetDel",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`delete from multiMeet where meetId = ${data.meetId};`)
  db.query(`delete from meetContent where meetId = ${data.meetId};`)

  res.send({messages: "ok"})
});

app.post("/contentDel",(req, res) =>{
  res.status(200)
  let data = req.body
  console.log(data)
  db.query(`delete from meetContent where contentId = ${data.contentId};`)
  res.send({messages: "ok"})
});

app.listen(5000, function() {
  console.log('OK!! SERVER RUNNING ON 4000.')
})

module.exports = app;
