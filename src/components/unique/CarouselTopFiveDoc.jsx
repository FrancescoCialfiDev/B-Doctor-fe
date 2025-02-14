export default function CarouselTopFiveDoc({ id, name, surname, specialization, image, vote }) {

    return (
        <div className="p-4 w-100 shadow text-center bg-light" key={id}>
            <img src={image} className="img-fluid rounded mx-auto d-block mb-3" alt="carousel-post-img" />
            <h2 className="fs-3 fw-bold text-center my-4">{name}</h2>
        </div>
    );
}