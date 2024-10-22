
import { Schema, model } from 'mongoose'

const vehicleSchema = new Schema({
    plate:{type:String,required:true},
    model:{type:String,required:true},
    year:{type:Number,required:true},
    owner:{type:String,required:true},
    maintenances:{type:String,required:true}
});

export default model('Vehicles',vehicleSchema);