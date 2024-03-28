//here we set the model of the data from the DB.

const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    Fname: { type: String, required: true, maxlength: 20 },
    Lname: { type: String, required: true, maxlength: 20 },
    City: { type: String, required: true, maxlength: 20 },
    Street: { type: String, required: true, maxlength: 20 },
    HouseNumber: { type: Number, required: true, maxlength: 20 },
    BirthDate: { type: Date, required: true },
    PhoneNumber1: { type: String, required: true, maxlength: 20 },
    PhoneNumber2: { type: String, required: true, maxlength: 20 },
    Vaccines: {
        type: Array(
            Object({
                VaccineDate: Date,
                Producer: { type: String, required: true, maxlength: 20 }
            }))
    },
    PositiveResultDate: { type: Date, required: true },
    RecoverDate: { type: Date },
})

module.exports = mongoose.model('entries', patientSchema);   //exports the model.