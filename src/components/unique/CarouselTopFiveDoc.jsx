export default function CarouselTopFiveDoc({ id, name, surname, specialization, image, vote }) {

    return (
        <div className="p-4 w-100 shadow text-center bg-light" key={id}>
            <img src="https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png" className="img-fluid rounded mx-auto d-block mb-3" alt="carousel-post-img" />
            <h3 className="fs-3 fw-bold text-center my-4">Dr. {name} {surname}</h3>
            <h4 className="my-4">{specialization}</h4>
            <p className="mt-auto">Vote: {vote}</p>

        </div>
    );
}