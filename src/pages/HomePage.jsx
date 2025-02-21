import CarouselTopFiveDocComponent from "../components/common/CarouselTopFiveDocComponent.jsx";
import CarouselSpecializationComponent from "../components/common/CarouselSpecializationComponent.jsx";
import RealCarouselComponent from "../components/common/RealCarouselComponent.jsx";
import style from "./HomePage.module.css";
import heroImg1 from '../public/jumbo.jpeg'
import heroImg2 from '../public/jumbo6.jpeg'
import heroImg3 from '../public/jumbo3.jpg'
import { useEffect } from "react";
import { Carousel } from "bootstrap";

export default function HomePage() {
    useEffect(() => {
        const carouselElement = document.querySelector('#carouselExampleCaptions');
        const carousel = new Carousel(carouselElement, {
            interval: 10000, // 10000 = 10 secondi
            ride: 'carousel'
        });
    }, []);

    return (
        <>
            <RealCarouselComponent />
            <CarouselSpecializationComponent />
            <CarouselTopFiveDocComponent />
        </>

    );
}
