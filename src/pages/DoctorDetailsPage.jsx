import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "../css/DoctorDetailsPage.module.css"

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
                <>
                    <div className={style.container}>
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
                </>

            ) : (
                <p>Loading...</p>
            )}
            <Outlet />
        </>
    );
}
