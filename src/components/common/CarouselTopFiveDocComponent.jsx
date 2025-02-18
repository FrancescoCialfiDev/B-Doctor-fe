import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import CarouselTopFiveDoc from "../unique/CarouselTopFiveDoc";

export default function CarouselTopFiveDocComponent() {
    const { doctors } = useContext(GlobalContext);

    if (!doctors || doctors.length === 0) {
        return <p>No doctors available</p>;
    }

    let topFiveDoc = doctors.slice(0, 5);

    return (
        <>
            <h2 className="mb-4 mt-4">Top 5 Doctors</h2>
            <div >
                {topFiveDoc.map((doctor) => (
                    <div key={doctor?.id}> 
                        <CarouselTopFiveDoc
                            id={doctor?.id}
                            name={doctor?.name}
                            surname={doctor?.surname}
                            specialization={doctor?.specializations} 
                            vote={doctor?.vote_average}
                            image={doctor?.img_url}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
