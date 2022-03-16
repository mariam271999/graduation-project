const app =require("express").Router()

const employeeModule=require("../model/employee.model")

const courseModel=require("../model/courses.model")

const { validationResult}=require('express-validator')

const validation = require('../validator/register.validation')


app.post("/registration",validation,async(req,res)=>{
    // console.log(req.body);
    // res.send("done")

    const err= validationResult(req)
    if(err.isEmpty()){
       const {
        firstName,
        lastName,
        country,
        phone,
        email,
        password,
        daleOfBirth,
        education,
        previousJob,
        softSkill,
        technicalSkill,
        project,
        courseTittle
    }=req.body



    
    let count=0 ;
    let t=[]

       const s = await courseModel.find()

       let courseSkill=[]
    
        for(q=0;q<courseTittle.length;q++){
            for(k=0;k<s.length;k++){
                if(courseTittle[q]==s[k].courseTittle){
                    for(l=0;l<s[k].targetSkill.length;l++){
                     
                        courseSkill.push(s[k].targetSkill[l])
                      

                    }
                    
                   

                }
                
            }
         

        }
       // console.log(courseSkill);
        
    
            
                for(i=0;i<technicalSkill.length;i++){
                    count=count+1
                    
                    for(j=0;j<project.length;j++){
                        for(w=0;w<project[j].skill.length;w++){
                            if(technicalSkill[i].tool==project[j].skill[w].tool){

                                
                                count=count+1
                        }

                        }
                        
                        
                    }

                    for(m=0;m<courseSkill.length;m++){

                        if(technicalSkill[i].tool==courseSkill[m].tool){
                            if(courseSkill[m].level=="low"){
                                count=count+1

                            }else if(courseSkill[m].level=="medium"){
                                count=count+2
                            }else{
                                count=count+3
                            }

                           
                        }
                    }

                    if(count==3){
                        technicalSkill[i]={
                            tool:technicalSkill[i].tool,
                            desc:technicalSkill[i].desc, 
                            level:"high"}
                            t.push(technicalSkill[i])
                            

                         
                    }else if(count==2){
                        technicalSkill[i]={
                            tool:technicalSkill[i].tool,
                            desc:technicalSkill[i].desc, 
                            level:"medium"}

                            t.push(technicalSkill[i])
                          

                    

                    }else{
                        technicalSkill[i]={
                            tool:technicalSkill[i].tool,
                            desc:technicalSkill[i].desc, 
                            level:"low"}

                            t.push(technicalSkill[i])
                          

                    }

              

                    




                    console.log(technicalSkill[i].tool+"="+count);
                    count=0

                   
                   
                }

                console.log(t);



                
   
       let user = await employeeModule.findOne({email})
    //    if(user){
    //        res.send("email exist")
    //    }
    //    else{
          await employeeModule.insertMany({

              firstName ,
              lastName,
              country,
              phone,
              email,
              password,
              daleOfBirth,
              education
              // :{
                 
              //    educationLevel:education.educationLevel,
              //     university:education.university,
              //     fieldOfStudy:education.fieldOfStudy,
              //     grade:education.grade,
              //     graduationYear:education.graduationYear,
              
              
              // }
              ,
              previousJob
              // :{
              
              //     jobName:previousJob.jobName,
              //     company:previousJob.company,
              //     year:previousJob.year
              
              // }
              ,
              softSkill
              // :{
              //     desc:softSkill.desc
              // }
              ,
              technicalSkill:t
              // :[{
              //     level:technicalSkill.level,
              //     desc:technicalSkill.desc,
              //     tool:technicalSkill.tool
              // }],
              , project
              // :{
              //     tittle:"k",
              //     desc:"m",
              //     time:4,
              //     size:7,
              //     skill
                  
              

                  
              // }
              ,
              courseTittle
           
                
              })
         // }
              
               

               
          res.json("success") 
               

              
      
            
    }
    else{
        
        res.send(err.array())
     
    }


    //insert
    })


    


    app.get("/getRegistration",async(req,res)=>{

    
        let data= await employeeModule.find()
        res.json(data)
        })



    app.post("/login",async(req,res)=>{

          const{email,password}=req.body
        const user= await employeeModule.findOne({email})
            if(user){
                if(user.password==password){
                   
                    res.json(user)
                }else{
                    res.json({message:"incorrect password"})
                    
                }
                
            }else{
                res.json({massege:"email not exist"})
            }
         
         })
         
        






module.exports=app