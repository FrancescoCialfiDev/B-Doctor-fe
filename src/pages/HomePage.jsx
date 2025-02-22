import CarouselTopFiveDocComponent from "../components/common/CarouselTopFiveDocComponent.jsx";
import CarouselSpecializationComponent from "../components/common/CarouselSpecializationComponent.jsx";
import RealCarouselComponent from "../components/common/RealCarouselComponent.jsx";

export default function HomePage() {

    return (
        <>
            <RealCarouselComponent />
            <CarouselSpecializationComponent />
            <div className="container">
                <CarouselTopFiveDocComponent />
            </div>
        </>

    );
}
