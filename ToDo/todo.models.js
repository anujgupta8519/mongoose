import mongoose from 'mongoose'
const toDoSchema = new mongoose.Schema({
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

    },
    subToDos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubToDO" 
        }
    ]
},{timestamps:true})

export const ToDO = mongoose.model('ToDO',toDoSchema)