
import styles from "../unique/CarouselSpecialization.module.css";
import { Link } from "react-router-dom";

const ProfileCard = ({ name, icon, id_spec }) => {

    return (
        <Link className={styles.links} key={id_spec} to="/specializations">
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img
                        src={icon}
                        alt="profile-img"
                        className={styles.image}
                    />
                </div>
            </div>
            <p className={styles.specialization}>{name.slice(0, 10) + "..."}</p>
        </Link >

    );
};

export default ProfileCard;
