import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import CarouselSpecialization from "../unique/CarouselSpecialization";
import style from "./CarouselSpecializationComponent.module.css"
import styles from "../unique/CarouselSpecialization.module.css";
import { Link } from "react-router-dom";

export default function CarouselSpecializationComponent() {
    const { specializations } = useContext(GlobalContext)
    if (!specializations || specializations.length === 0) {
        return <p>No specialization available</p>;
    }
    console.log(specializations)
    return (<>
        <h2 className="mb-3 mt-4">Specialists</h2>

        <div className={style.carouel_scroll}>
            <div className={style.carouel_row}>
                <Link className={styles.links} to="/doctors">
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img
                                style={{ "width": "100px" }}
                                src="src/public/all.png"
                                alt="profile-img"
                                className={styles.image}
                            />
                        </div>
                    </div>
                    <p className={styles.specialization}>All Doctors</p>
                </Link >
                {specializations.map((specialization) => {
                    return <CarouselSpecialization
                        key={specialization?.id}
                        id_spec={specialization?.id}
                        name={specialization?.name}
                        icon={specialization?.icon_url} />;
                })}
            </div>
        </div>
    </>
    );
}