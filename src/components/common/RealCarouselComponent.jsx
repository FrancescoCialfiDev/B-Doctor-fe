
import heroImg1 from '../../public/jumbo.jpeg'
import heroImg2 from '../../public/jumbo6.jpeg'
import heroImg3 from '../../public/jumbo3.jpg'
import { useEffect } from "react";
import { Carousel } from "bootstrap";
import style from "../../pages/HomePage.module.css";
export default function RealCarouselComponent() {
    useEffect(() => {
        const carouselElement = document.querySelector('#carouselExampleCaptions');
        new Carousel(carouselElement, {
            interval: 2000, // 10000 = 10 secondi prima di scorrere automaticamente sulla prosima immagine
            ride: 'carousel'
        });
    }, []);

    return (

        <div id="carouselExampleCaptions" className="carousel slide position-relative" data-bs-ride="carousel">
            <div>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className={`carousel-item active ${style.cardBackground}`}>
                        <img src={heroImg1} className="jumboImg d-block w-100" alt="First slide" />
                        <div className="carousel-caption d-none d-lg-block z-1 position-absolute">
                            <h2 className="text-white card-title pt-2">Your Health, Our Mission – Innovative Care for a Better Tomorrow</h2>
                            <h6 className="text-white card-text">Combining expertise and technology to ensure the best treatments and faster recovery</h6>
                            <p className={style.textSmall}>Because every step towards healing starts with the right care and dedication.</p>
                        </div>
                    </div>
                    <div className={`carousel-item ${style.cardBackground}`}>
                        <img src={heroImg3} className={`jumboImg d-block w-100`} alt="Second slide" />
                        <div className="carousel-caption d-none d-lg-block z-1">
                            <h2 className="text-white card-title pt-2">Your Health, Our Mission – Innovative Care for a Better Tomorrow</h2>
                            <h6 className="text-white card-text">Combining expertise and technology to ensure the best treatments and faster recovery</h6>
                            <p className={style.textSmall}>Because every step towards healing starts with the right care and dedication.</p>
                        </div>
                    </div>
                    <div className={`carousel-item ${style.cardBackground}`}>
                        <img src={heroImg2} className="  jumboImg d-block w-100" alt="Third slide" />
                        <div className="carousel-caption d-none d-lg-block z-1">
                            <h2 className="text-white card-title pt-2">Your Health, Our Mission – Innovative Care for a Better Tomorrow</h2>
                            <h6 className="text-white card-text">Combining expertise and technology to ensure the best treatments and faster recovery</h6>
                            <p className={style.textSmall}>Because every step towards healing starts with the right care and dedication.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div id='overlay' className=" position-absolute top-0 h-100 w-100">
            </div>
        </div>

    );
}
