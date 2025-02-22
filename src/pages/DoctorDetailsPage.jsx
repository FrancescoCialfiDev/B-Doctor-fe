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
    const backgrownd_color = "background-color"


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
        <><div className="container">
            {detailsDoc ? (
                <div className={style.badgeContainer}>

                    <img id={`${style.big_image}`} src={detailsDoc?.img_url} alt={`${detailsDoc?.name} ${detailsDoc?.surname}`} />

                    <div className={style.badge}>
                        <div className={style.clip}></div>
                        <div className={`${style.header} custom`}>
                            <h3 className={style.doctorName}>Dr. {detailsDoc?.name} {detailsDoc?.surname}</h3>
                        </div>
                        <div id={style.doc_white_card_part}>
                            <div className={style.profileContainer}>
                                <img className={`${style.profileImage} custom`} src={detailsDoc?.img_url} alt={`${detailsDoc?.name} ${detailsDoc?.surname}`} />
                            </div>
                            <div id={style.card_all_info}>

                                <div className={style.vote}>
                                    <div className={style.stars}><StarsComponent vote={detailsDoc?.vote_average} /></div>
                                </div>
                                <div id={style.info_wrapper}>
                                    <div className={`text-center ${style.detailsSection}`}>
                                        <div id={style.one_info_badge}>
                                            <p className="pb-2">
                                                <strong>SPECIALIZATIONS</strong>
                                            </p>
                                            <ul className={style.spec_badge_wrapper} >
                                                {detailsDoc?.specializations.map((specialization) => {
                                                    return <Link id="notcustom" className={style.spec_badge_link} key={specialization?.id} to={`/specializations/${specialization?.id}`} >
                                                        <li key={specialization?.id} className={style.spec_badge} style={{
                                                            color: `${specialization.color}`,
                                                            border: `3px solid ${specialization.color}`,
                                                        }}>{specialization.name}</li>
                                                    </Link>
                                                })}
                                            </ul>
                                        </div>

                                    </div>
                                    <div className={`text-center ${style.detailsSection}`}>
                                        <div className={style.one_info}>
                                            <p>
                                                <strong>MAIL</strong>
                                            </p>
                                            <p>
                                                {detailsDoc?.email}
                                            </p>
                                        </div>
                                        <div className={style.one_info}>
                                            <p>
                                                <strong>TELEPHONE NUMBER</strong>
                                            </p>
                                            <p>
                                                {detailsDoc?.phone}
                                            </p>
                                        </div>
                                        <div className={style.one_info}>
                                            <p>
                                                <strong>YOU CAN VISIT ME AT</strong>
                                            </p>
                                            <p>
                                                {detailsDoc?.office_address}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-center">
                                    {buttonReviews}
                                    <div className="text-center ms-3">
                                        <Link to={`/doctors/${detailsDoc?.id}/form`} className="btn btn-primary">Add new review</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            ) : (
                <p>Loading...</p>
            )
            }
            <Outlet />
        </div>
        </>
    );
}