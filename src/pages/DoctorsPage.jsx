import { GlobalContext } from "../contexts/GlobalContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StarsComponent from "../components/common/StarsComponent.jsx";
import style from "../css/DoctorsPage.module.css";
import { SearchBar } from "../components/common/searchComponent.jsx";

export default function DoctorsPage() {
    const { doctors, setDoctors, doctorsCopy } = useContext(GlobalContext);

    return (
        <> <div className="container">
            <nav className="pt-4 mb-4 d-flex justify-content-between w-100 align-items-center">
                <h1 className={`mb-0 ${style.title_doctors}`}>
                    Doctor List ({doctors && doctors.length})
                </h1>
                <SearchBar data={doctorsCopy} setData={setDoctors} />
            </nav>
            {/* card doctors */}
            <div className="row justify-content-center">
                {doctors != null ?
                    doctors.map((doctor) => (
                        <div key={doctor.id} className="col-lg-6 col-12 d-flex justify-content-center">
                            <div className={`card p-3 shadow-lg ${style.badge}`}>
                                <div className="card-header text-white text-center custom">
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
                    )) : (<h3 className="w-100 d-flex align-items-center justify-content-center">No doctors Available...</h3>)}
            </div>

            <div className="d-flex mt-3 justify-content-center">
                <Link to="/formDoctor" className="btn some-shadow btn-primary m-3">
                    Are you a doctor? you can sing in here!
                </Link>
            </div>
        </div>
        </>
    );
}      