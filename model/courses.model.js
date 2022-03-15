const mongoose= require("mongoose")

const courseSchema=mongoose.Schema({

    courseTittle:String,
    hour:Number,
    instactorName:String,
    prerequestSkill:[{
        desc:String,
        tool:String,
        level:String

    }],

    targetSkill:[{
        desc:String,
        tool:String,
        level:String
    }],

    link:String
})



const courseModel=mongoose.model('course',courseSchema)

module.exports=courseModel