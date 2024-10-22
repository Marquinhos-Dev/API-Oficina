
import {Schema,model} from 'mongoose'

const maintenanceSchema = new Schema({
    workshop:{type:Schema.Types.ObjectId,ref:'Workshops',required:true},
    vehicle:{type:Schema.Types.ObjectId,ref:'Vehicles',required:true},
    services:{type:Object,required:true},
    date:{type:Date,required:true},
    totalCost:{type:Number,required:true}
});

export default model('Maintenances',maintenanceSchema);