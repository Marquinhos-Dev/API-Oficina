
const DB = require('../configs/DB.js');

const maintenanceSchema = new DB.Schema({
    workshop:{type:DB.Schema.Types.ObjectId,ref:'Workshops',required:true},
    vehicle:{type:DB.Schema.Types.ObjectId,ref:'Vehicles',required:true},
    services:{type:Object,required:true},
    date:{type:Date,required:true},
    totalCost:{type:Number,required:true}
});

const Maintenance = new DB.model('Maintenances',maintenanceSchema);

module.exports = Maintenance;