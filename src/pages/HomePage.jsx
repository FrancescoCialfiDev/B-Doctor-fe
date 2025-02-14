import { GlobalContext } from "../contexts/GlobalContext.jsx"
import { useContext } from "react"
import CarouselTopFiveDocComponent from "../components/common/CarouselTopFiveDocComponent.jsx"

export default function HomePage() {    
    return (
        <>
            <CarouselTopFiveDocComponent/>
        </>
    )
}
