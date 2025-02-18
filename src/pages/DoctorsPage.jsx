import { GlobalContext } from "../contexts/GlobalContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StarsComponent from "../components/common/StarsComponent.jsx";
import style from "../css/DoctorsPage.module.css";

export default function DoctorsPage() {
    const { doctors } = useContext(GlobalContext);

    return (        <>
            <h1 className="text-center m-3">Doctor List ({doctors.length} doctors)</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className="col-lg-6 col-12 d-flex justify-content-center">
                            <div className={`card p-3 shadow-lg ${style.badge}`}>
                                <div className="card-header text-white text-center bg-primary">
                                    <h3 className={`mb-0 ${style.title}`}>{doctor.name} {doctor.surname}</h3>
                                </div>
                                <div className="d-flex justify-content-center position-relative">
                                    <img className={style.profileImage} src={doctor.img_url} alt={`${doctor.name} ${doctor.surname}`} />
                                </div>
                                <div className="text-center mt-2">
                                    <StarsComponent vote={doctor.vote_average} />
                                </div>
                                <div className="card-body text-center ">
                                    <p><strong>Specializations:</strong> {doctor.specializations}</p>
                                </div>
                                <div className="text-center">
                                    <Link to={`/doctors/${doctor.id}`} className="btn btn-primary">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/formDoctor" className="btn btn-primary m-3">
                    Se sei un dottore, puoi registrarti qui
                </Link>
            </div>
        </>
    );
}
