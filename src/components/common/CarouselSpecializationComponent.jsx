import { GlobalProvider, GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import CarouselSpecialization from "../unique/CarouselContent";

export default function CarouselSpecializationComponent({ }) {
    const { specializations } = useContext(GlobalContext)

    return (
        <div className="overflow-x-scroll my-20" >
            <div className="flex w-610">
                {specializations.map((specialization) => {
                    return <CarouselSpecialization key={specialization.id} title={specialization.title} image={specialization.img} />
                })}
            </div>
        </div>
    );
}