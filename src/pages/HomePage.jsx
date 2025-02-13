import { GlobalContext } from "../contexts/GlobalContext.jsx"
import { useContext } from "react"

export default function HomePage() {
    const { doctors, setDoctors } = useContext(GlobalContext)
    console.log(doctors)
    return (
        <>
            <h1>{doctors[4]?.name}</h1>
        </>
    )
}
