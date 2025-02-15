import CarouselTopFiveDocComponent from "../components/common/CarouselTopFiveDocComponent.jsx"
import CarouselSpecializationComponent from "../components/common/CarouselSpecializationComponent.jsx";
import style from "./HomePage.module.css";


export default function HomePage() {
    return (
        <section className="px-3 container">
            <div className={`card pt-3 ${style.cardBackground}`}>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center">
                        <img src="https://pngimg.com/d/doctor_PNG15964.png" className={style.img} alt="..." />
                    </div>

                    <div className="col-6">
                        <div>
                            <h2 className="card-title pt-2">Your Healt is our Priority</h2>
                            <h6 className="card-text">Dr: Antony</h6>
                            <p className={style.textSmall}>Ortophedic | Specialist</p>
                        </div>
                    </div>
                </div>
            </div>

            <CarouselSpecializationComponent />

            <CarouselTopFiveDocComponent />

        </section>

    )
}
