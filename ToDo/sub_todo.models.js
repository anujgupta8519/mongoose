import mongoose from 'mongoose'
const subToDoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }
},{timestamps:true})

export const SubToDO = mongoose.model('SubToDO',subToDoSchema)