import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarsComponent from "../components/common/StarsComponent";
import { Link } from "react-router-dom";
import style from "../css/DoctorsPage.module.css";

export default function AllSpecialistsPage() {
    const [specialists, setSpecialists] = useState([]);
    const { id } = useParams(); // Otteniamo l'id della specializzazione dalla URL

    // Funzione per recuperare i medici per una specializzazione
    function getSpecialization() {
        axios.get(`http://localhost:3000/specializations/${id}`)
            .then((res) => {
                console.log("Medici presi dalla specializzazione", res.data.doctors);
                setSpecialists(res.data.doctors); // Impostiamo lo stato con i medici
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Data fetch completed!");
            });
    }

    // Eseguiamo il fetch ogni volta che l'ID della specializzazione cambia
    useEffect(() => {
        if (id) {
            getSpecialization();
        }
    }, [id]); // Aggiungiamo `id` come dipendenza per eseguire nuovamente la richiesta quando cambia

    return (
        <><div className="container">
            <h1 className="text-center p-3">{specialists[0]?.specializations} specialists ({specialists.length})</h1>
            <div className={`row justify-content-center ${style.container}`}>
                {specialists.length === 0 ? (
                    <p>No specialists found for this specialization.</p>
                ) : (
                    specialists.map((doctor) => (
                        <div key={doctor.id} className="col-lg-6 col-12 d-flex justify-content-center">
                            <div className={`card p-3 shadow-lg ${style.badge}`}>
                                <div className="custom  card-header text-white text-center">
                                    <h3 className={`mb-0 ${style.title}`}>{doctor.name} {doctor.surname}</h3>
                                </div>
                                <div className="d-flex justify-content-center position-relative">
                                    <img className={style.profileImage} src={doctor.img_url} alt={`${doctor.name} ${doctor.surname}`} />
                                </div>
                                <div className="text-center mt-2">
                                    <StarsComponent vote={doctor.vote_average} />
                                </div>
                                <div className="card-body text-center">
                                    <p><strong>Specializations:</strong> {doctor.specializations} and more!</p>
                                </div>
                                <div className="text-center">
                                    <Link to={`/doctors/${doctor.id}`} className="btn btn-primary">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
        </>
    );
}
