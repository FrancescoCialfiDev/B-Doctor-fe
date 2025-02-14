export default function CarouselSpecialization({ name, image }) {

    return (
        <div className="position-relative p-4 w-100 shadow text-center bg-light">
            <img src="https://cdn-icons-png.flaticon.com/512/7292/7292483.png" className="img-fluid rounded mx-auto d-block mb-3" alt="carousel-post-img" />
            <h2 className="position-absolute top-50 start-50 translate-middle fs-3 fw-bold bg-white text-center text-dark">{name}</h2>
        </div>
    );
}