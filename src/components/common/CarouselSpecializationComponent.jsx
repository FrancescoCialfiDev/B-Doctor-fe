import { GlobalProvider, GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import CarouselSpecialization from "../unique/CarouselSpecialization";
import style from "./CarouselSpecializationComponent.module.css"
import { Link } from "react-router-dom";

export default function CarouselSpecializationComponent({ }) {
    const { specializations } = useContext(GlobalContext)
    if (!specializations || specializations.length === 0) {
        return <p>No specialization available</p>;
    }
    console.log(specializations)
    return (<>
        <h1 className="my-4 mb-3">Specializations</h1>
        <Link to="">
            <div className={style.carouel_scroll}>
                <div className={style.carouel_row}>
                    {specializations.map((specialization) => {
                        return <CarouselSpecialization
                            key={specialization?.id}
                            name={specialization?.name} />;
                    })}
                </div>
            </div>
        </Link>
    </>
    );
}