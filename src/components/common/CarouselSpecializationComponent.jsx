import { GlobalProvider, GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import CarouselSpecialization from "../unique/CarouselContent";

export default function CarouselSpecializationComponent({ }) {
    const { specializations } = useContext(GlobalContext)

    return (
        <div className="overflow-auto my-5">
            <div className="d-flex w-100">
                {specializations.map((specialization) => {
                    return <CarouselSpecialization key={specialization.id} title={specialization.title} image={specialization.img} />;
                })}
            </div>
        </div>
    );
}