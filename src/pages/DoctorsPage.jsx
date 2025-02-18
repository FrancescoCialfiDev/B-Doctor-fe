import { GlobalContext } from "../contexts/GlobalContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StarsComponent from "../components/common/StarsComponent.jsx";
import style from "../css/DoctorsPage.module.css";

export default function DoctorsPage() {
    const { doctors } = useContext(GlobalContext);

    return (
        <>
            <h1 className="text-center m-3">Doctor List</h1>
            <div className={style.badgeContainer}>
                {doctors
                    .map((doctor) => (
                        <div key={doctor.id} className={style.badge}>
                            <div className={style.clip}></div>
                            <div className={style.header}>
                                <h3 className={style.doctorName}>{doctor.name} {doctor.surname}</h3>
                            </div>
                            <div className={style.profileContainer}>
                                <img className={style.profileImage} src={doctor.img_url} alt={`${doctor.name} ${doctor.surname}`} />
                                                                
                            </div>
                            <div className={style.vote}>
                                    <StarsComponent vote={doctor.vote_average} />
                                </div>
                            <div className={style.detailsSection}>
                                <p><strong>Specializations:</strong> {doctor.specializations}</p>
                                {/* <p>{doctor?.icon_url}</p> */}
                            </div>
                            <div className={style.signatureSection}>
                                <Link to={`/doctors/${doctor.id}`} className={style.viewProfileLink}>View Profile</Link>
                            </div>
                        </div>
                    ))}
                <div className="d-flex justify-content-center">
                    <Link to="/formDoctor" className="btn btn-primary m-3">
                        Se sei un dottore, puoi registrarti qui
                    </Link>
                </div>
            </div>
        </>
    );
}
