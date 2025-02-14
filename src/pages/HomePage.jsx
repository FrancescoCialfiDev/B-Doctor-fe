import CarouselTopFiveDocComponent from "../components/common/CarouselTopFiveDocComponent.jsx"
import style from "./HomePage.module.css";


export default function HomePage() {
    return (
        <section className="px-3">
            <div className="card pt-3" style={{ width: '100%', borderRadius: '25px' }}>
                <div className="row">
                    <div className="col-6">
                        <img src="https://pngimg.com/d/doctor_PNG15964.png" className="card-img-top ps-2" alt="..." />
                    </div>

                    <div className="col-6">
                        <div>
                            <h2 className="card-title pt-2">Yout Healt is our Priority</h2>
                            <h6 className="card-text">Dr: Antony</h6>
                            <p className={style.textSmall}>Ortophedic | Specialist</p>
                        </div>
                    </div>
                </div>
            </div>


            <CarouselTopFiveDocComponent />
        </section>

    )
}
