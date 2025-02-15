import React from "react";
import styles from "../unique/CarouselSpecialization.module.css";
import { Link } from "react-router-dom";

const ProfileCard = ({ name, icon }) => {
    return (
        <Link to="">
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img
                        src={icon}
                        alt="profile-img"
                        className={styles.image}
                    />
                </div>
                <p className={styles.specialization}>{name}</p>
            </div>
        </Link >

    );
};

export default ProfileCard;
