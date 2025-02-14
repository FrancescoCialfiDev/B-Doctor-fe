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
        <>
        <h2>Raccomanded Doctors</h2>
        <div className="overflow-auto my-5">
            <div className="d-flex w-100">
                {topFiveDoc.map((doctor) => {
                    console.log(doctor?.id)
                    return (
                        <CarouselTopFiveDoc
                            key={doctor?.id}
                            id={doctor?.id}
                            name={doctor?.name}
                            surname={doctor?.surname}
                            specialization={doctor?.specializations}
                            // image={doctor.img}
                            vote={doctor?.vote_average}
                        />
                    );
                })}
            </div>
        </div>
        </>
    );
}



