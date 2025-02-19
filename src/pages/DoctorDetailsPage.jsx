import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../css/DoctorDetailsPage.module.css";
import StarsComponent from "../components/common/StarsComponent";

export default function DoctorDetailsPage() {
    const [detailsDoc, setDetailsDoc] = useState(null);
    const { id } = useParams();
    const urlReviews = `${window.location.pathname}`
    let buttonReviews

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

    if (urlReviews === `/doctors/${detailsDoc?.id}/reviews`) {
        buttonReviews = <div className="text-center">
            <Link to={`/doctors/${detailsDoc?.id}`} className="btn btn-primary">Close Reviews</Link>
        </div>
    } else {
        buttonReviews = <div className="text-center">
            <Link to={`/doctors/${detailsDoc?.id}/reviews`} className="btn btn-primary">Show Reviews</Link>
        </div>
    }

    return (
        <>
            {detailsDoc ? (
                <div className={style.badgeContainer}>

                    <img id={style.big_image} src={detailsDoc?.img_url} alt={`${detailsDoc?.name} ${detailsDoc?.surname}`} />

                    <div className={style.badge}>
                        <div className={style.clip}></div>
                        <div className={style.header}>
                            <h3 className={style.doctorName}>Dr. {detailsDoc?.name} {detailsDoc?.surname}</h3>
                        </div>
                        <div className={style.profileContainer}>
                            <img className={style.profileImage} src={detailsDoc?.img_url} alt={`${detailsDoc?.name} ${detailsDoc?.surname}`} />
                        </div>

                        <div className={style.vote}>
                            <div className={style.stars}><StarsComponent vote={detailsDoc?.vote_average} /></div>
                        </div>

                        <div className="d-flex justify-content-evenly my-3">
                            <div className={`text-start align-items-start ${style.detailsSection}`}>
                                <p><strong>SPECIALIZATIONS</strong><br /> {detailsDoc?.specializations}</p>
                            </div>
                            <div className="text-start">
                                <p><strong>MAIL</strong> {detailsDoc?.email}</p>
                                <p><strong>TELEPHONE NUMBER</strong> {detailsDoc?.phone}</p>
                                <p><strong>YOU CAN VISIT ME AT</strong> {detailsDoc?.office_address}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            {buttonReviews}
                            <div className="text-center ms-3">
                                <Link to={`/doctors/${detailsDoc?.id}/form`} className="btn btn-primary">Add new review</Link>
                            </div>
                        </div>
                    </div>
                </div >
            ) : (
                <p>Loading...</p>
            )
            }
            <Outlet />
        </>
    );
}