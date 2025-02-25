import styles from "./CarouselSpecializationComponent.module.css" // Importiamo un modulo di stile custom per la nostra searchbar
import { useState } from "react" // Importiamo lo useState che ci permette di creare variabili di stato

export const SearchBar = ({ data, setData }) => {

    const [searchValue, setSearchValue] = useState("") // Creiamo una variabile di stato per salvare il valore inserito nel campo di input

    function handlechange(event) {
        setSearchValue(event.target.value)
    }

    function submitPrevent(event) {
        event.preventDefault()
        let filteredArray = data.filter((element) => { return element.name.toLowerCase().includes(searchValue.toLowerCase()) })
        if (filteredArray.length != 0 && searchValue.trim().length != 0) {
            setData(filteredArray)
        } else if (searchValue.trim().length == 0) {
            setData(data)
        } else if (filteredArray.length == 0) {
            setData(null)
        }
    }



    return (

        <div id="formContainer" className={`pt-3 pt-md-0 d-flex flex-column flex-md-row justify-content-md-between ${styles.search}`}>
            <form id="form" className="d-flex flex-column flex-md-row align-items-center w-100" role="search" onSubmit={submitPrevent}>
                <div className="d-flex w-100">
                    <input
                        className="form-control some-shadow me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={handlechange}
                    />
                    <button className="button" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>


    )
}


