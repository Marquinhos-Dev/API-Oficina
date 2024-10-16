
const DB = require('../configs/DB.js');

const workshopSchema = new DB.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    specialties:{type:Array,required:true}
});

const Workshop = new DB.model('Workshops',workshopSchema);

module.exports = Workshop;