import { GlobalProvider, GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import CarouselSpecialization from "../unique/CarouselSpecialization";
import style from "./CarouselSpecializationComponent.module.css"

export default function CarouselSpecializationComponent({ }) {
    const { specializations } = useContext(GlobalContext)
    if (!specializations || specializations.length === 0) {
        return <p>No specialization available</p>;
    }
    console.log(specializations)
    return (<>
        <h1 className="my-4 mb-3">Specializations</h1>

        <div className={style.carouel_scroll}>
            <div className={style.carouel_row}>
                {specializations.map((specialization) => {
                    return <CarouselSpecialization
                        key={specialization?.id}
                        id_spec={specialization?.id}
                        name={specialization?.name}
                        icon={specialization?.icon_url} />;
                })}
            </div>
        </div>
    </>
    );
}