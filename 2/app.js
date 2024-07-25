"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const app = express();
// app.listen(3000);
//  import express from 'express'
// or
const express = require("express");
const todos_1 = __importDefault(require("./routes/todos"));
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(todos_1.default);
app.listen(3000,()=>{
    console.log("Port is running on 3000");
});
