import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/patients")
            .then((res) => res.json())
            .then((patients) => setData(patients));

            console.log(data)
    }, []);
    return (
        <div>
            {data[0] != {}
                ? (<div>There are no patients</div>)
                : (data.map((patient) => {
                    (
                        <div>
                            <div>{patient.ID}</div>
                            <div>{patient.Fname}</div>
                            <div>{patient.Lname}</div>
                            <div>{patient.City}</div>
                            <div>{patient.Street}</div>
                            <div>{patient.HouseNumber}</div>
                            <div>{patient.BirthDAte}</div>
                            <div>{patient.PhoneNumber1}</div>
                            <div>{patient.PhoneNumber2}</div>
                            <div>{patient.PositiveResultDate}</div>
                            <div>{patient.RecoverDate}</div> 
                            {
                                patient.Vaccines.map((vaccine) => {
                                    (<div>
                                        <div>{Vaccine.VaccineDate}</div>
                                        <div>{Vaccine.Producer}</div>
                                    </div>)
                                })
                            }
                        </div>
                    )
                }))}
        </div>
    );
};

export default App;
