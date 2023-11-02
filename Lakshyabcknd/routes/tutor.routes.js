const express=require("express")
const {auth}=require("../middlewares/auth.middleware")
const { TutorModel } = require("../models/tutor.model")

const tutorRouter=express.Router()

// noteRouter.use(auth)
tutorRouter.get('/hii',(req,res)=>{
    res.send('hii')
})
tutorRouter.post("/create",async(req,res)=>{
try{
    const tutor=new TutorModel(req.body)
    await tutor.save()
    res.json({msg:"New tutor has been added",tutor:req.body})
}catch(err){
    res.json({error:err.message})
}
})

tutorRouter.get("/",async(req,res)=>{
    try{
        const tutors=await TutorModel.find()
        console.log(tutors)
        res.status(200).send(tutors)
    }catch(err){
        res.status(400).json({error:err.message})
    }
    })

// tutorRouter.patch("/update/:noteID",async(req,res)=>{
//     const userIDinUserDoc=req.body.userID
//     const {noteID}=req.params
//     try{
//     const tutor=await TutorModel.findOne({_id:noteID})
//     const userIDinNoteDoc=tutor.userID
//     // console.lof(note)
//     if(userIDinUserDoc===userIDinNoteDoc){
//         // console.log("userID in the User Doc",userIDinUserDoc, "userID istutor Doc",userID)
//     await TutorModel.findByIdAndUpdate({_id:noteID},req.body)
//     res.json({msg:`${tutor.title}has been updated`})
//     }else{
//      // console.log("userID in the User Doc",userIDinUserDoc, "userID istutor Doc",userID)
//         res.json({msg:"Not Authorized!!"})
//     }
// }catch(err){
//     res.json({error:err})
// }
// })

// tutorRouter.delete("/delete/:noteID",async(req,res)=>{
//     const userIDinUserDoc=req.body.userID
//     const {noteID}=req.params
//     try{
//     const tutor=await TutorModel.findOne({_id:noteID})
//     const userIDinNoteDoc=tutor.userID
//     // console.lof(note)
//     if(userIDinUserDoc===userIDinNoteDoc){
//     await TutorModel.findByIdAndDelete({_id:noteID})
//     res.json({msg:`${tutor.title}has been updated`})
//     }else{

//         res.json({msg:"Not Authorized!!"})
//     }
// }catch(err){
//     res.json({error:err})
// }
// })

module.exports={
   tutorRouter
}