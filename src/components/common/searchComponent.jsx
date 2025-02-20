import styles from "./CarouselSpecializationComponent.module.css" // Importiamo un modulo di stile custom per la nostra searchbar
import { useState } from "react" // Importiamo lo useState che ci permette di creare variabili di stato
import { useContext } from "react" // Importiamo lo useContext che ci permette di consumare dei dati provenienti da un contesto "x"
import { GlobalContext } from "../../contexts/GlobalContext" // Importiamo il contesto da consumare


export const SearchBar = () => {



    const { setSpecializations, specializationsCopy } = useContext(GlobalContext) // Otteniamo dal contesto globale tutte le specializzazioni
    const [searchValue, setSearchValue] = useState("") // Creiamo una variabile di stato per salvare il valore inserito nel campo di input

    function handlechange(event) {
        setSearchValue(event.target.value)
    }

    function submitPrevent(event) {
        event.preventDefault()
        let filteredArray = specializationsCopy.filter((element) => { return element.name.toLowerCase().includes(searchValue.toLowerCase()) })
        if (filteredArray.length != 0 && searchValue.trim().length != 0) {
            setSpecializations(filteredArray)
        } else if (searchValue.trim().length == 0) {
            setSpecializations(specializationsCopy)
        } else if (filteredArray.length == 0) {
            setSpecializations(null)
        }
    }



    return (

        <div className={`d-flex ${styles.search}`}>
            <form className="d-flex" role="search" onSubmit={submitPrevent}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handlechange}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>

    )
}

