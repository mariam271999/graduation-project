const express = require("express");

const app = express()


app.use(express.json())

app.use(require('./routes/employee.routes'))
app.use(require('./routes/course.routes'))

const mongoose= require("mongoose");


const employeeModule=require('./model/employee.model')

const courseModel=require('./model/courses.model')


mongoose.connect('mongodb://localhost:27017/employeeCv',{useNewUrlParser: true ,useUnifiedTopology: true})

app.listen(3000,()=>{
    console.log("server running");
})

// console.log(employeeModule.findOne({technicalSkill}));