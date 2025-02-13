export default function CarouselSpecialization({ title, image }) {

    return (
        <div className="relative p-8 w-500 shadow-md text-center">
            <img src={image} className="carousel-img fa-solid fa-user-large h-auto rounded-md mx-auto mb-4 " alt="carousel-post-img" />
            <h2 className="absolute text-3xl font-bold text-center my-6">{title}</h2>
        </div>
    );
}