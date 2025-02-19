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

            <div className="col-12 d-flex justify-content-center" key={id}>
                <div className={`card p-3 shadow-lg ${style.badge}`}>
                    <div className="card-header text-white text-center bg-primary">
                        <h3 className={`mb-0 ${style.title}`}>{name} {surname}</h3>
                    </div>
                    <div className="d-flex justify-content-center position-relative">
                        <img className={style.profileImage} src={image} alt={`${name} ${surname}`} />
                    </div>
                    <div className="text-center mt-2">
                        <StarsComponent vote={vote} />
                    </div>
                    <div className="card-body text-center">
                        <p><strong>Specializations:</strong> {specialization}</p>
                    </div>
                    <div className="text-center">
                        <Link to={`/doctors/${id}`} className="btn btn-primary">View Profile</Link>
                    </div >
                </div >
            </div >

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
