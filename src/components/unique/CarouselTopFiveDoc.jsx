import style from "./CarouselTopFiveDoc.module.css";
import { Link } from "react-router-dom";
export default function CarouselTopFiveDoc({ id, name, surname, specialization, image, vote }) {

    vote = Math.round(vote / 2)

    return (
        <div className={style.cardContainer} key={id}>

            <div className={style.card}>
                {/* Contenitore dell'immagine con aspetto circolare */}
                <div className={style.imageWrapper}>
                    <img
                        src={image || "https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png"}
                        alt="doctor"
                        className={style.cardImage}
                    />
                </div>
                <div className={style.cardBody}>
                    <h5 className={style.cardTitle}>Dr: {name} {surname}</h5>
                    <h6 className={style.cardSpecialization}>{specialization}</h6>
                    <div className="d-flex justify-content-between">
                        <p className={style.cardVote}><strong>⭐{vote}/5</strong></p>
                        {/* <p className={style.reviews}><strong>{reviws}</strong></p> */}
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <Link to={`http://localhost:5173/doctors/${id}`} className={`btn btn-outline-primary ${style.detailsButton}`}>Details</Link>
                    </div>

                </div>
            </div>

        </div>

    );
}
