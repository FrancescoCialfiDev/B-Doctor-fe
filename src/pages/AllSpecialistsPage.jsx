import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "../css/DoctorDetailsPage.module.css"

export default function AllSpecialistsPage() {
    const [specialists, setSpecialists] = useState([]);
    const { id } = useParams();
    console.log(specialists)
    function getSpecialists() {
        axios.get(`http://localhost:3000/specializations/${id}`)
            .then((res) => {
                console.log(res.data)
                setSpecialists(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Data fetch completed!");
            });
    }

    useEffect(() => {
        getSpecialists();
    }, []);

    return (
        <>
            <h1 className="text-center m-3">specialization Specialists</h1>
            <div className={style.container}>
                {specialists
                    .map((specialist) => (
                        <div key={specialist.id} className={style.doctorCard}>
                            <img className={style.image} src={doctor.img_url} alt={`${specialist.name} ${specialist.surname}`} />
                            <div className={style.details}>
                                <h3>{specialist.name} {specialist.surname}</h3>
                                <p className={style.stars}><StarsComponent vote={specialist.vote_average} /></p>
                                <div className={style.specializations}>
                                    <h4>{specialist.specializations}</h4>
                                    <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>

        </>
    );
}