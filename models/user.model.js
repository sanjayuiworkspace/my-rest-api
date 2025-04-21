const mongoose = require('mongoose');

const employeDetailSchema = new mongoose.Schema({
    id: {type:Number},
    name: {type:String},
    email: {type:String},
    phone: {type:String},
    address: {type:String},
    city: {type:String},
    state: {type:String}
});
const employeeData =  mongoose.model('employees',employeDetailSchema);

module.exports = employeeData;