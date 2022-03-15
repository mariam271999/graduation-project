const app =require("express").Router()


const courseModel=require("../model/courses.model")

app.post('/addCourse',async (req,res)=>{


    const {

        courseTittle,
        hour,
        instactorName,
        prerequestSkill,
        targetSkill,
        link


    }=req.body


    await courseModel.insertMany({

       courseTittle,
        hour,
        instactorName,
        prerequestSkill,
        targetSkill,
        link

    })
    console.log("ok");

    res.json("done")

})

module.exports=app