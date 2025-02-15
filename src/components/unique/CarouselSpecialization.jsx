import React from "react";
import styles from "../unique/CarouselSpecialization.module.css";

const ProfileCard = ({ name }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src="https://static.thenounproject.com/png/761552-200.png"
                    alt="profile-img"
                    className={styles.image}
                />
            </div>
            <p className={styles.specialization}>{name}</p>
        </div>
    );
};

export default ProfileCard;
