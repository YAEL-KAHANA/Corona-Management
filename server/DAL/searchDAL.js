const Patient = require("../models/patientModel");

const CreatePatient = (data) => {
    try {
        Patient.create(data);
    }
    catch (error) {
        console.log(error)
    }
}

const ReadAllPatients = async () => {

    try {
        console.log("entered patients DAL")

        const data = await Patient.find({});
        return data;
    } catch (error) {
        console.log(error);
    }
}

const UpdatePatient = async (id, patch) => {
    try {
        const response = Patient.findByIdAndUpdate(id, patch);
    } catch (error) {
        console.log(error)
    }

}

const DeletePatient = (id) => {
    try {
        const response = Patient.findByIdAndDelete(id);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getResultByRequest = async (query) => {
    const regex = new RegExp(query, 'i')
    return await Patient.find({
        $or: [
            { ID: regex }
        ]
    });
}

module.exports = { getResultByRequest, CreatePatient, UpdatePatient,ReadAllPatients,DeletePatient };



