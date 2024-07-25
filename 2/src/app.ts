// const express = require("express");
// const app = express();
// app.listen(3000);
//  import express from 'express'
// or
import express = require("express");
import todosRoutes from './routes/todos'
import bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(todosRoutes)


app.listen(3000,()=>{
    console.log("app running on 3000")
});
