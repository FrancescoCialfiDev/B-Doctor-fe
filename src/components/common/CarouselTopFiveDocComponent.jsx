import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import CarouselTopFiveDoc from "../unique/CarouselTopFiveDoc";
import style from "./CarouselTopFiveDocComponent.module.css"

export default function CarouselTopFiveDocComponent() {
    const { doctors } = useContext(GlobalContext);

    if (!doctors || doctors.length === 0) {
        return <p>No doctors available</p>;
    }

    let topFiveDoc = doctors.slice(0, 5);

    return (<>
        <h1>Racomended Doctors</h1>
        <div className={style.carouel_scroll}>

            <div className={style.carouel_row}>
                {topFiveDoc.map((doctor) => {
                    if (!doctor?.id) return null;
                    return (
                        <CarouselTopFiveDoc
                            key={doctor?.id}
                            id={doctor?.id}
                            name={doctor?.name}
                            surname={doctor?.surname}
                            specialization={doctor?.specializations}
                            vote={doctor?.vote_average}
                        />
                    );
                })}
            </div>
        </div></>
    );
}
