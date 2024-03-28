const { query } = require("express");
const {getResultByRequest, ReadAllPatients} = require("../DAL/searchDAL");

const searchResults = async (query)=>{
    const results = await getResultByRequest(query);
    return results;
}

const getAllPatients = async ()=>{
    console.log("entered patients Logic")

    const data = await ReadAllPatients();
    return data.json();
}

module.exports = {searchResults, getAllPatients};


