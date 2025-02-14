import { createContext, useState, useEffect } from "react";
import axios from "axios";;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {


    const [doctors, setDoctors] = useState([]);

    function getDoctors() {
        axios
            .get("http://localhost:3000/doctors")
            .then((response) => {
                console.log(response);                
                setDoctors(response.data.doctors)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally("Data fetch completed!")
    }

    useEffect(() => { getDoctors() }, [])

    return (
        <GlobalContext.Provider value={{ doctors, setDoctors }}>
            {children}
        </GlobalContext.Provider >
    )
}

export { GlobalProvider, GlobalContext };