
const mongoose= require("mongoose")

const employeeSchema= mongoose.Schema({

firstName:String ,
lastName:String ,
country:String ,
phone: Number,
email:String,
password:String,
daleOfBirth:Number,

education:{
    educationLevel:String,
    fieldOfStudy:String,//miinor
    university:String,//major
    grade:String,
    graduationYear:Number,
},
previousJob:{

    jobName:String,
    company:String,
    year:String,

},
softSkill:{
desc:String

},
technicalSkill:[{
    level:String,
    desc:String,
    tool:String


} ]
,
project:{
    tittle:String,
    desc:String,
    time:Number,
    size:Number,
    skill:[{tool:String,desc:String}]
   

}
,
courseTittle:[String]
})

const employeeModule= mongoose.model('employee',employeeSchema)

module.exports= employeeModule




