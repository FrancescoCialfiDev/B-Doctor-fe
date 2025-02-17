import { GlobalContext } from "../contexts/GlobalContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StarsComponent from "../components/common/starsComponent.jsx";
import style from "../css/DoctorsPage.module.css";

export default function DoctorsPage() {
    const { doctors } = useContext(GlobalContext);

    return (
        <>
            <h1 className="text-center m-3">Doctor List</h1>
            <div className={style.container}>
                {doctors
                    .map((doctor) => (
                        <div key={doctor.id} className={style.doctorCard}>
                            <img className={style.image} src={doctor.img_url} alt={`${doctor.name} ${doctor.surname}`} />
                            <div className={style.details}>
                                <h3>{doctor.name} {doctor.surname}</h3>
                                <p className={style.stars}><StarsComponent vote={doctor.vote_average} /></p>
                                <div className={style.specializations}>
                                    <h4>{doctor.specializations}</h4>
                                    <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
            <div className="d-flex justify-content-center">
                <Link to="/formDoctor" className="btn btn-primary m-3">
                    Are you a doctor? Join us Now!
                </Link>
            </div>

        </>
    );
}

