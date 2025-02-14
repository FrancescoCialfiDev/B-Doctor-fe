export default function CarouselSpecialization({ name, image }) {

    return (
        <div className="position-relative gup-5 p-4 w-100 shadow rounded-circle text-center">
            <img src="https://static.thenounproject.com/png/761552-200.png" className="img-fluid mx-auto d-block" alt="carousel-post-img" />
            <p className="position-absolute top-50 start-50 translate-middle fs-4 fw-bold bg-white text-center text-dark">{name}</p>
        </div>
    );
}