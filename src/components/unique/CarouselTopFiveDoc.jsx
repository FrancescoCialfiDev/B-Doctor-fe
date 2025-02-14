import style from "./CarouselTopFiveDoc.module.css"
export default function CarouselTopFiveDoc({ id, name, surname, specialization, image, vote }) {

    return (
        <div className={style.carouel_card} key={id}>
            <img src="https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png" className="img-fluid rounded mx-auto d-block mb-3" alt="carousel-post-img" />
            <h2 className="fw-bold my-4">{name} <br /> {surname}</h2>
            <h3 className="my-4">{specialization}</h3>
            <p className="mt-auto">Vote: {vote}</p>

        </div>
    );
}