const app =require("express").Router()

const employeeModule=require("../model/employee.model")

const courseModel=require("../model/courses.model")

const { validationResult}=require('express-validator')

const validation = require('../validator/register.validation')
const { log } = require("console")
const e = require("express")

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



    

       

       const s = await courseModel.find()

       let courseSkill=[]
    
        for(q=0;q<courseTittle.length;q++){
            for(k=0;k<s.length;k++){
                if(courseTittle[q]==s[k].courseTittle){
                    for(l=0;l<s[k].targetSkill.length;l++){
                        //console.log(s[k].targetSkill[l].tool);
                        courseSkill.push(s[k].targetSkill[l].tool)
                      

                    }
                    
                   

                }
                
            }
         

        }
        console.log(courseSkill);
        
      
    

       


    //    for(q=0;q<courseTittle.length;q++){
    //        if(courseTittle[q]==s.courseTittle){
    //            console.log(courseTittle[q]);
    //        }
    //    }

    //    console.log(m);

    //    for(q=0;q<courseTittle.length;q++){
    //     if(courseTittle[q]==m.courseTittle){
    //         console.log(courseTittle[q]);
       
    //     }

    //    }
       
   
      //  let user = await employeeModule.findOne({email})
        //  if(user){
        //     //  res.send("email exist")
        //     // res.json(req.body.project.skill.length)
        //     //  res.json(user.technicalSkill.tool)
        //     let counter=0;
        //     // if(req.body.technicalSkill){
        //     //     counter=counter+1
        //     // }
        //     // res.json(counter)
        //     for(i=0;i< user.technicalSkill.length;i++){
        //         // counter=counter+1
        //         for(j=0;j<user.project.skill.length;j++){

        //             if(user.technicalSkill[i].tittle== user.project.skill[j].tittle){
        //                 counter=counter+1
                        
                        

        //             }

                   
                    
                    
        //         }

        //         res.json(counter)
        //         counter=0

                


        //     }
           

            
          
            

           
        //  }
        //  else{
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
                technicalSkill
                // :[{
                //     level:technicalSkill.level,
                //     desc:technicalSkill.desc,
                //     tool:technicalSkill.tool
                 
                
                
                // }],
                
                ,
                
                project
                // :{
                //     tittle:project.tittle,
                //     desc:project.desc,
                //     time:project.time,
                //     size:project.size,
                //     skill:project.skill
                

                    
                // }
                ,
                courseTittle
             
                  
                })
                

            let count=0 ;


            
                for(i=0;i<technicalSkill.length;i++){
                    count=count+1
                    
                    for(j=0;j<project.skill.length;j++){
                        
                            if(technicalSkill[i].tool==project.skill[j].tool){
                                count=count+1
                        }
                    }

                    for(m=0;m<courseSkill.length;m++){

                        if(technicalSkill[i].tool==courseSkill[m]){
                            count=count+1
                        }
                    }

                  const B=  await employeeModule.findOne({email})

                 // console.log(B.id);
                 // console.log(technicalSkill[i].level);

                    if(count==3){
                       await employeeModule.updateOne({_id:B.id},
                        {
                            $set:{
                              technicalSkill
                            }

                       })




                        console.log("high");


                        // await employeeModule.update(
                        //     {
                        //        "technicalSkill[i]":"technicalSkill[i].tool"
                        //     },
                        //     {
                        //         "$set":{
                                    
                        //             "technicalSkill[i].level":"high"

                        //         }

                        //     }

                            


                        // )
                    }else if(count==2){

                        console.log("madium");
                    }else{

                        console.log("low");
                    }




                    console.log(technicalSkill[i].tool+"="+count);
                    count=0

                   
                   
                }
               

               
               
            

                res.json("success")
                // res.json(firstName)
               

            //   
        //    const m =await employeeModule.findOne({email})
        //    let carry=0;
        //    if(m.technicalSkill.tool){
        //     // 
        //     carry=carry+1
        //     // res.json(m.technicalSkill.tool.length)
        //     // res.json(carry)



           

            

        //    }

        //    for(i=0;i<m.technicalSkill.length;i++){
        //        for(j=0;j<m.project.skill.length;j++){
        //            if(m.technicalSkill.tool[i]==m.project.skill[j]){
        //                carry=carry+1

        //            }

        //        }
        //        for(k=0;k<m.courses.skill.length;k++){
        //         if(m.technicalSkill.tool[i]==m.courses.skill[k]){
        //             carry=carry+1

        //         }


        //        }
        //        res.json(carry)
        //    }




        //    if(m.project.time){

        //    }

        //    if(m.project.size){

        //    }

           
              
               
               
        // }
        
            
    }
    else{
        
        res.send(err.array())
     
    }
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