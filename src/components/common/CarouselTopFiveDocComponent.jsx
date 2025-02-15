import { GlobalProvider, GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import CarouselTopFiveDoc from "../unique/CarouselTopFiveDoc";

export default function CarouselTopFiveDocComponent({ }) {
    const { doctors } = useContext(GlobalContext)





    if (!doctors || doctors.length === 0) {
        return <p>No doctors available</p>;
    }

    let topFiveDoc = doctors.slice(0, 5);



    return (
        <>
            <h2 className="my-4">Raccomanded Doctors</h2>
            <div className="overflow-auto">
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



