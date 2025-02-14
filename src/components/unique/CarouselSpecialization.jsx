export default function CarouselSpecialization({ title, image }) {

    return (
        <div className="position-relative p-4 w-100 shadow text-center bg-light">
            <img src={image} className="img-fluid rounded mx-auto d-block mb-3" alt="carousel-post-img" />
            <h2 className="position-absolute top-50 start-50 translate-middle fs-3 fw-bold text-center text-dark">{title}</h2>
        </div>
    );
}