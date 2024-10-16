
const DB = require('../configs/DB.js');

const vehicleSchema = new DB.Schema({
    plate:{type:String,required:true},
    model:{type:String,required:true},
    year:{type:Number,required:true},
    owner:{type:String,required:true},
    maintenances:{type:String,required:true}
});

const Vehicle = new DB.model('Vehicles',vehicleSchema);

module.exports = Vehicle;