import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import StarsComponent from "./StarsComponent";
import { Link } from "react-router-dom";
import style from "./CarouselTopFiveDocComponent.module.css";

export default function CarouselTopFiveDocComponent() {
    const { doctors } = useContext(GlobalContext);

    if (!doctors || doctors.length === 0) {
        return <p>No doctors available</p>;
    }

    let topFiveDoc = doctors.slice(0, 5);

    function CarouselTopFiveDoc({ id, name, surname, specialization, image, vote }) {
        return (
            <div className={style.cardContainer} key={id}>
                <div className={style.card}>
                    <div className={style.imageWrapper}>
                        <img
                            src={image || "https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png"}
                            alt="doctor"
                            className={style.cardImage}
                        />
                    </div>
                    <div className={style.cardBody}>
                        <h5 className={style.cardTitle}>Dr: {name} {surname}</h5>
                        <h6 className={style.cardSpecialization}>{specialization}</h6>
                        <div>
                            <StarsComponent vote={vote} />
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Link to={`http://localhost:5173/doctors/${id}`} className={`btn btn-outline-primary ${style.detailsButton}`}>
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

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
