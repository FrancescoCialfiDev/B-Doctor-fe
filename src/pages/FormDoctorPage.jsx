import { GlobalContext } from "../contexts/GlobalContext.jsx";
import { useContext, useState } from "react";
import axios from "axios";
import style from "../css/FormDoctorPage.module.css";

const initialDoctor = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    office_address: "",
    serial_number: "",
    sex: "",
    img_url: null,
    specializations: [] // Aggiungi specializations qui
};

export default function FormDoctorPage() {
    const { specializations } = useContext(GlobalContext);
    const [newDoctor, setNewDoctor] = useState(initialDoctor);

    function sendData() {
        axios.post(`http://localhost:3000/doctors`, newDoctor)
            .then((res) => console.log("Success:", res.data))
            .catch((err) => console.error("Error:", err));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (newDoctor.img_url == null) {
            if (newDoctor.sex === "man") {
                newDoctor.img_url = "https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png";
            } else {
                newDoctor.img_url = "https://static.vecteezy.com/system/resources/previews/041/409/060/non_2x/ai-generated-a-female-doctor-with-a-stethoscope-isolated-on-transparent-background-free-png.png";
            }
        }
        sendData();
        window.location.href = "http://localhost:5173/doctors";
        alert("Success! Your profile has being added succesfully");
        console.log(newDoctor);
    }

    function handleChange(e) {
        const { name, value, checked, type } = e.target;
        if (type === "checkbox") {
            setNewDoctor((prevDoctor) => {
                const newSpecializations = checked
                    ? [...prevDoctor.specializations, value]
                    : prevDoctor.specializations.filter((spec) => spec !== value);
                return { ...prevDoctor, specializations: newSpecializations };
            });
        } else {
            setNewDoctor({ ...newDoctor, [name]: value });
        }
    }

    return (
        <div className="container">
            <div className="m-5">
                <form onSubmit={handleSubmit} className={`mt-2 pb-5 bg-light rounded-3 ${style.badge}`} autoComplete="off">
                    <h1 className={`p-3 d-flex justify-content-center text-white ${style.headerForm}`}>Join us</h1>
                    <p className="form-waring mb-2 p-2 text-center">
                        Champs that starts with <strong> * </strong> are required (you cant leave them empty)</p>

                    <div className="px-3">
                        {/* name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">*Insert your <strong>Name</strong></label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="EX. Jhon"
                                value={newDoctor.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* surname */}
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">*Insert your <strong>Surname</strong></label>
                            <input
                                className="form-control"
                                id="surname"
                                name="surname"
                                placeholder="EX. Doe"
                                value={newDoctor.surname}
                                onChange={handleChange}
                                required
                            ></input>
                        </div>

                        {/* specializations */}
                        <div className="mb-3">
                            <label htmlFor="specializations" className="form-label">*Choose your <strong>Specializations</strong></label>
                            <div className={`row + ${style.specializationsList}`}>
                                {specializations.map((specialization, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 mb-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="specializations"
                                                id={`specialization-${index}`}
                                                value={specialization.id}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor={`specialization-${index}`}>
                                                {specialization.name}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">*Insert your <strong>Email Address</strong></label>
                            <input
                                type="email"
                                min="0"
                                max="5"
                                step="1"
                                className="form-control "
                                id="email"
                                name="email"
                                placeholder="EX. jhon@doe.com"
                                value={newDoctor.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* phone */}
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">*Insert your <strong> Mobile Number</strong></label>
                            <input
                                pattern="[0-9]{3}[0-9]{7}"
                                className="form-control"
                                id="phone"
                                name="phone"
                                placeholder="EX. 1234567890"
                                value={newDoctor.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* office_addres */}
                        <div className="mb-3">
                            <label htmlFor="office_address" className="form-label">*Insert your <strong>Office Address</strong></label>
                            <input
                                type="text"
                                className="form-control"
                                id="office_address"
                                name="office_address"
                                placeholder="EX. OfficeAddres ST. 1500"
                                value={newDoctor.office_address}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* serial_number */}
                        <div className="mb-3">
                            <label htmlFor="serial_number" className="form-label">*Insert your <strong>Serial Number</strong> </label>
                            <input
                                min="100000"
                                max="999999"
                                type="text"
                                className="form-control"
                                id="serial_number"
                                name="serial_number"
                                placeholder="EX. SN123456"
                                value={newDoctor.serial_number}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* sex */}
                        <div className="mb-3 d-flex flex-column align-items-center">
                            <label htmlFor="sex" className="form-label">*Choose your <strong>Gender</strong> </label>
                            <div id="sex" className="ms-2 d-flex">
                                {/* male */}
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sex"
                                        id="m-sex"
                                        value="man"
                                        checked={newDoctor.sex === "man"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>

                                {/* female */}
                                <div className="form-check ms-3">
                                    <input
                                        className="form-check-input pl-1"
                                        type="radio"
                                        name="sex"
                                        id="f-sex"
                                        value="woman"
                                        checked={newDoctor.sex === "woman"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className="form-check me-1 d-flex ">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="Terms"
                                    required
                                />
                            </div>
                            <span className="form-check-label">I accept the Terms of Service and Privacy Policy</span>
                        </div>
                        <button type="submit" className={`btn btn-outline-primary mt-4 ${style.btn}`}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}