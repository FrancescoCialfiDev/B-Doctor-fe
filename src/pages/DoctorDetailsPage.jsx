import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "../css/DoctorDetailsPage.module.css"

export default function DoctorDetailsPage() {
    const [detailsDoc, setDetailsDoc] = useState(null);
    const { id } = useParams();
    console.log(detailsDoc)
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
                <>
                    <div className={style.container}>
                        <img className={style.image} src={detailsDoc?.img_url} alt={`${detailsDoc?.name} ${detailsDoc?.surname}`} />

                        <div className={style.doctorCard}>
                            <div className={style.nameSurname}>
                                <h2>{detailsDoc?.name}</h2>
                                <h2>{detailsDoc?.surname}</h2>
                            </div>
                            <div className={style.details}>
                                <p>{detailsDoc?.email}</p>
                                <p>{detailsDoc?.office_address}</p>
                                <p>{detailsDoc?.phone}</p>
                                <p>{detailsDoc?.serial_number}</p>
                            </div>
                        </div>
                    </div>
                    <h1>Reviews</h1>

                    {
                        detailsDoc.reviews.map((review) => {
                            return (

                                <div key={review.id} className={style.review_card}>
                                    <h1>{review.name_patient}</h1>
                                    <p>{review.description}</p>
                                    <p>{review.vote}</p>
                                </div>
                            )
                        })
                    }

                </>

            ) : (
                <p>Loading...</p>
            )}
            <Outlet />
        </>
    );
}
