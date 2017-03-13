var mongoose = require('mongoose'); // Import Mongoose Package
var Schema = mongoose.Schema;

var IncidentSchema = new Schema({
    name: { type: String, required: true},
    empid: { type: String, lowercase: true, required: true},
    desknumber: { type: String, required: true},
    approver: { type: String, required: true, lowercase: true},
    approverid: {type:String,required:true},
    sev:{type:String},
    issuetype:{type:String}
  
});

module.exports = mongoose.model('Incident',IncidentSchema);