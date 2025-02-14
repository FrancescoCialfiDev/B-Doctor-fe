import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import CarouselTopFiveDoc from "../unique/CarouselTopFiveDoc";

export default function CarouselTopFiveDocComponent() {
    const { doctors } = useContext(GlobalContext);

    if (!doctors || doctors.length === 0) {
        return <p>No doctors available</p>;
    }

    let topFiveDoc = doctors.slice(0, 5);

    return (
        <div className="overflow-auto my-5">
            <div className="d-flex w-100">
                {topFiveDoc.map((doctor) => {
                    if (!doctor?.id) return null;
                    return (
                        <CarouselTopFiveDoc
                            key={doctor?.id}
                            id={doctor?.id}
                            name={doctor?.name}
                            surname={doctor?.surname}
                            specialization={doctor?.specializations}
                            vote={doctor?.vote}
                        />
                    );
                })}
            </div>
        </div>
    );
}
