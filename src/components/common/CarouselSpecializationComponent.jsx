import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import styles from "./CarouselSpecializationComponent.module.css"
import { Link } from "react-router-dom";
import { SearchBar } from "./searchComponent";

export default function CarouselSpecializationComponent() {

    const { specializations, setSpecializations, specializationsCopy } = useContext(GlobalContext)


    return (

        <>
            <nav className="mx-5 mt-5 mb-4 d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center text-center ">
                <h2 className={`mb-0 ${styles.title_doctors}`}>Specializations</h2>
                <SearchBar setData={setSpecializations} data={specializationsCopy} />
            </nav>


            <div className={`${styles.container} mx-5`}>
                <div className={styles.carouel_scroll}>
                    <div className={styles.carouel_row}>

                        {/* All doctors Specializations */}
                        {/* <Link className={styles.links} to="/doctors">
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
                    </Link > */}

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
                                    <p className={styles.specialization}>{specialization.name}</p>
                                </Link >
                            }) : (<h3 className="w-100 d-flex align-items-center justify-content-center text-center">No specializations Available...</h3>)}

                    </div>
                </div>
            </div>
        </>
    );
}