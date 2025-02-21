import CarouselTopFiveDocComponent from "../components/common/CarouselTopFiveDocComponent.jsx";
import CarouselSpecializationComponent from "../components/common/CarouselSpecializationComponent.jsx";
import style from "./HomePage.module.css";
import heroImg1 from '../public/jumbo.jpg'
import heroImg2 from '../public/jumbo6.jpeg'
import heroImg3 from '../public/jumbo3.jpg'
import { useEffect } from "react";
import { Carousel } from "bootstrap";

export default function HomePage() {
    useEffect(() => {
        const carouselElement = document.querySelector('#carouselExampleCaptions');
        const carousel = new Carousel(carouselElement, {
            interval: 10000, // Autoplay interval in milliseconds
            ride: 'carousel'
        });
    }, []);

    return (
        <>
            <div className={`card ${style.cardBackground}`}>
                <div id="overlay" className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-6">
                        <div>
                            <h2 className="text-white card-title pt-2">Your Health is our Priority</h2>
                            <h6 className="text-white card-text">Dr: Antony</h6>
                            <p className={style.textSmall}>Orthopedic | Specialist</p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className={`carousel-item active ${style.cardBackground}`}>
                        <img src={heroImg1} className=" jumboImg d-block w-100" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-white card-title pt-2">Your Health, Our Mission – Innovative Care for a Better Tomorrow</h2>
                            <h6 className="text-white card-text">Combining expertise and technology to ensure the best treatments and faster recovery</h6>
                            <p className={style.textSmall}>Because every step towards healing starts with the right care and dedication.</p>
                        </div>
                    </div>
                    <div className={`carousel-item ${style.cardBackground}`}>
                        <img src={heroImg3} className={`${style.jumboImg}  d-block w-100`} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-white card-title pt-2">Your Health, Our Mission – Innovative Care for a Better Tomorrow</h2>
                            <h6 className="text-white card-text">Combining expertise and technology to ensure the best treatments and faster recovery</h6>
                            <p className={style.textSmall}>Because every step towards healing starts with the right care and dedication.</p>
                        </div>
                    </div>
                    <div className={`carousel-item ${style.cardBackground}`}>
                        <img src={heroImg2} className="  jumboImg d-block w-100" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-white card-title pt-2">Your Health, Our Mission – Innovative Care for a Better Tomorrow</h2>
                            <h6 className="text-white card-text">Combining expertise and technology to ensure the best treatments and faster recovery</h6>
                            <p className={style.textSmall}>Because every step towards healing starts with the right care and dedication.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <CarouselSpecializationComponent />

            <CarouselTopFiveDocComponent />

        </>

    );
}
