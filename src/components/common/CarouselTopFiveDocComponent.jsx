import { GlobalProvider, GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import CarouselTopFiveDoc from "../unique/CarouselContent";

export default function CarouselTopFiveDocComponent({ }) {
    const { doctors } = useContext(GlobalContext)
    let topFiveDoc = []
    for (i = 0; i < 4; i++) {
        topFiveDoc.push(doctors[i])
    }
    return (
        <div className="overflow-x-scroll my-20" >
            <div className="flex w-610">
                {topFiveDoc.map((doctor) => {
                    return <CarouselTopFiveDoc key={doctor.id} name={doctor.name} surname={doctor.surname} specialization={doctor.specialization} image={doctor.img} vote={doctor.vote} />
                })}
            </div>
        </div>
    );
}