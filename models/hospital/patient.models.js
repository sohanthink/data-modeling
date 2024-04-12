import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    diagonisedWith:{
        type:String,
        required:true,
    },
    addres:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
    },
    bloodGroup:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["M","F","0"],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    },
},{timestamps:true})

export const Patient = mongoose.model("Patient",patientSchema)