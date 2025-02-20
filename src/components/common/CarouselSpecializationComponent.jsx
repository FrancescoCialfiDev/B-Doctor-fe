import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import styles from "./CarouselSpecializationComponent.module.css"
import { Link } from "react-router-dom";
import { SearchBar } from "./searchComponent";
import { HiH1 } from "react-icons/hi2";

export default function CarouselSpecializationComponent() {

    const { specializations } = useContext(GlobalContext)


    return (

        <>
            <nav className="mt-5 mb-4 d-flex justify-content-between w-100 align-items-center">
                <h2 className={`mb-0 ${styles.title_doctors}`}>Specializations</h2>
                <SearchBar />
            </nav>

            <div className={styles.carouel_scroll}>
                <div className={styles.carouel_row}>

                    {/* All doctors Specializations */}
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

                    {/*Single Specialization*/}
                    {specializations != null ?
                        specializations.map((specialization) => {
                            return <Link className={styles.links} key={specialization?.id} to={`/specializations/${specialization?.id}`} >
                                <div className={styles.card}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src={specialization?.icon_url}
                                            alt="profile-img"
                                            className={styles.image}
                                        />
                                    </div>
                                </div>
                                <p className={styles.specialization}>{specialization.name.slice(0, 10) + "..."}</p>
                            </Link >
                        }) : (<h3 className="w-100 d-flex align-items-center justify-content-center text-white">No specializations Available...</h3>)}

                </div>
            </div>
        </>
    );
}