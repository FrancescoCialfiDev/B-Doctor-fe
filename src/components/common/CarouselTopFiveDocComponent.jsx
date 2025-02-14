import { GlobalProvider, GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import CarouselTopFiveDoc from "../unique/CarouselTopFiveDoc";

export default function CarouselTopFiveDocComponent({ }) {
    const { doctors } = useContext(GlobalContext)
    let topFiveDoc = []
    for (let i = 0; i < 5; i++) {
        topFiveDoc.push(doctors[i])
    }
    
    return (
        <div className="overflow-auto my-5">
            <div className="d-flex w-100">
                {topFiveDoc.map((doctor) => {
                    return (
                        <CarouselTopFiveDoc
                            id={doctor?.id}
                            name={doctor?.name}
                            surname={doctor?.surname}
                            specialization={doctor?.specialization}
                            // image={doctor.img}
                            vote={doctor?.vote}
                        />
                    );
                })}
            </div>
        </div>
    );
}    