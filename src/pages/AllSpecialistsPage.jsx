import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "../css/DoctorDetailsPage.module.css"
import StarsComponent from "../components/common/StarsComponent";
import { Link } from "react-router-dom";

export default function AllSpecialistsPage() {
    const [specialization, setSpecialization] = useState([]);
    const { id } = useParams();
    console.log(id)
    function getSpecialization() {
        axios.get(`http://localhost:3000/specializations/${id}`)
            .then((res) => {
                console.log("dottori presi dalla showSpecializations")
                console.log(res.data.doctors)
                setSpecialization(res.data.doctors);
                console.log(specialization)
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

    return (
        <>
            <h1 className="text-center m-3">specialization Specialists</h1>
            <div className={style.container}>
                {specialization
                    .map((specialist) => (
                        <div key={specialist?.id} className={style.doctorCard}>
                            <img className={style.image} src={specialist?.img_url} alt={`${specialist?.name} ${specialist?.surname}`} />
                            <div className={style.details}>
                                <h3>{specialist?.name} {specialist?.surname}</h3>
                                <p className={style.stars}><StarsComponent vote={specialist?.vote_average} /></p>
                                <div className={style.specializations}>
                                    <h4>{specialist?.specializations}</h4>
                                    <Link to={`/doctors/${specialist?.id}`}>View Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>

        </>
    );
}