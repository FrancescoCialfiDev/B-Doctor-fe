import CarouselTopFiveDocComponent from "../components/common/CarouselTopFiveDocComponent.jsx";
import CarouselSpecializationComponent from "../components/common/CarouselSpecializationComponent.jsx";
import style from "./HomePage.module.css";

export default function HomePage() {
    return (
        <>
            <div className={`card mt-4 ${style.cardBackground}`}>
                <div className="row align-items-center">
                    <div className={`col-6 d-flex justify-content-center`}>
                        <img src="https://pngimg.com/d/doctor_PNG15964.png" className={style.img} alt="..." />
                    </div>

                    <div className="col-6">
                        <div>
                            <h2 className="text-white card-title pt-2">Your Health is our Priority</h2>
                            <h6 className="text-white card-text">Dr: Antony</h6>
                            <p className={style.textSmall}>Orthopedic | Specialist</p>
                        </div>
                    </div>
                </div>
            </div>

            <CarouselSpecializationComponent />

            <CarouselTopFiveDocComponent />

        </>

    );
}
