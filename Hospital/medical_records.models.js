import mongoose from 'mongoose';
const medicalRecordSchema = new mongoose.Schema({
    patients:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    },
    treatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    },
    treatmentProgress:[
        {
            type:String,
        }
    ]
},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema)