import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "../css/DoctorDetailsPage.module.css";
import StarsComponent from "../components/common/StarsComponent";

export default function DoctorDetailsPage() {
    const [detailsDoc, setDetailsDoc] = useState(null);
    const { id } = useParams();

    function getDetailsDoc() {
        axios.get(`http://localhost:3000/doctors/${id}`)
            .then((res) => {
                setDetailsDoc(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Data fetch completed!");
            });
    }

    useEffect(() => {
        getDetailsDoc();
    }, []);

    return (
        <>
            {detailsDoc ? (
                <div className={style.badgeContainer}>
                    <div className={style.badge}>
                        <div className={style.clip}></div>
                        <div className={style.header}>
                            <h3 className={style.doctorName}>Dr. {detailsDoc?.name} {detailsDoc?.surname}</h3>

                            <p className={style.specialization}>{detailsDoc?.specialization}</p>
                        </div>
                        <div className={style.profileContainer}>
                            <img className={style.profileImage} src={detailsDoc?.img_url} alt={`${detailsDoc?.name} ${detailsDoc?.surname}`} />
                        </div>

                        <div className={style.vote}>
                            <div className={style.stars}><StarsComponent vote={detailsDoc?.vote_average}/></div>
                        </div>

                        <div>
                            <div className={style.detailsSection}>                               
                                <p><strong>specializzazioni:</strong> {detailsDoc?.specializations}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Outlet />
        </>
    );
}