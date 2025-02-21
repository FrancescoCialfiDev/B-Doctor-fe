import CarouselTopFiveDocComponent from "../components/common/CarouselTopFiveDocComponent.jsx";
import CarouselSpecializationComponent from "../components/common/CarouselSpecializationComponent.jsx";
import style from "./HomePage.module.css";

export default function HomePage() {
    return (
        <>
            <div className={`card ${style.cardBackground}`}>
                <div id="overlay" className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-6">
                        <div>
                            <h2 className="text-white card-title pt-2">Your Health, Our Mission – Innovative Care for a Better Tomorrow</h2>
                            <h6 className="text-white card-text">Combining expertise and technology to ensure the best treatments and faster recovery</h6>
                            <p className={style.textSmall}>Because every step towards healing starts with the right care and dedication.</p>
                        </div>
                    </div>
                </div>
            </div>


            <CarouselSpecializationComponent />
            <div className="container">
                <CarouselTopFiveDocComponent />
            </div>

        </>

    );
}
