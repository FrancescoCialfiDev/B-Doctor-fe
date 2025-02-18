import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StarsComponent from "../components/common/StarsComponent";
import { Link } from "react-router-dom";
import style from "../css/DoctorsPage.module.css"

export default function AllSpecialistsPage() {
    const [specialists, setSpecialists] = useState([]);
    const { id } = useParams();
    console.log(id)
    function getSpecialization() {
        axios.get(`http://localhost:3000/specializations/${id}`)
            .then((res) => {
                console.log("dottori presi dalla showSpecializations")
                console.log(res.data.doctors)
                setSpecialists(res.data.doctors);
                console.log(specialists)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Data fetch completed!");
            });
    }

    useEffect(() => {
        getSpecialization();
    }, []);
    //console.log(specialists[0].specializations)
    return (
        <>
            <h1 className="text-center m-3"> specialists</h1>
            <div className={`row justify-content-center${style.container}`}>
                {specialists
                    .map((doctor) => (
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
                                    <p><strong>Specializations:</strong> {doctor.specializations} and more!</p>
                                </div>
                                <div className="text-center">
                                    <Link to={`/doctors/${doctor.id}`} className="btn btn-primary">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>

        </>
    );
}