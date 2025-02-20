import { createContext, useState, useEffect } from "react";
import axios from "axios";;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [doctors, setDoctors] = useState([]);
    const [doctorsCopy, setDoctorsCopy] = useState([]);
    const [specializations, setSpecializations] = useState([]);
    const [specializationsCopy, setSpecializationsCopy] = useState([]);

    function getDoctors() {
        axios
            .get("http://localhost:3000/doctors")
            .then((response) => {
                setDoctors(response.data.doctors)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally("Data fetch completed!")
    }

    function getDoctorsCopy() {
        axios
            .get("http://localhost:3000/doctors")
            .then((response) => {
                setDoctorsCopy(response.data.doctors)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally("Data fetch completed!")
    }

    function getSpecializations() {
        axios
            .get("http://localhost:3000/specializations")
            .then((response) => {
                setSpecializations(response.data.specializations)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally("Data fetch completed!")
    }

    function getSpecializationsCopy() {
        axios
            .get("http://localhost:3000/specializations")
            .then((response) => {
                setSpecializationsCopy(response.data.specializations)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally("Data fetch completed!")
    }




    useEffect(() => { getDoctors(), getSpecializations(), getSpecializationsCopy(), getDoctorsCopy() }, [])

    return (
        <GlobalContext.Provider value={{ doctors, setDoctors, specializations, setSpecializations, specializationsCopy, setSpecializationsCopy, doctorsCopy, setDoctorsCopy }}>
            {children}
        </GlobalContext.Provider >
    )
}

export { GlobalProvider, GlobalContext };