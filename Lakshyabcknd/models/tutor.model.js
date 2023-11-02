const mongoose=require("mongoose")

const tutorSchema=mongoose.Schema({
img:String,
name: String,
location:String,
qualification:String,
price:String,
onlineprice:String,
experience:String
},{
    versionKey:false
})

const TutorModel=mongoose.model("tutor",tutorSchema)

module.exports={
    TutorModel
}