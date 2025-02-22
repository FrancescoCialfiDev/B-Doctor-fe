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
    specializations: []
};

export default function FormDoctorPage() {
    const { specializations } = useContext(GlobalContext);
    const [newDoctor, setNewDoctor] = useState(initialDoctor);
    const [errors, setErrors] = useState({});

    function validateField(name, value) {
        switch (name) {
            case "name":
            case "surname":
                return value.trim().length >= 3 ? "" : "Must be at least 3 characters";
            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format";
            case "phone":
                return /^\d{10,15}$/.test(value) ? "" : "Must be 10 to 15 digits";
            case "office_address":
                return value.trim() !== "" ? "" : "Office address is required";
            case "serial_number":
                return value.length === 8 ? "" : "Must be exactly 8 characters";
            case "sex":
                return value !== "" ? "" : "Gender is required";
            case "specializations":
                return value.length > 0 ? "" : "At least one specialization is required";
            default:
                return "";
        }
    }

    function handleChange(e) {
        const { name, value, checked, type } = e.target;
        let fieldValue = value;

        if (type === "checkbox") {
            setNewDoctor((prevDoctor) => {
                const newSpecializations = checked
                    ? [...prevDoctor.specializations, value]
                    : prevDoctor.specializations.filter((spec) => spec !== value);
                const error = validateField("specializations", newSpecializations);
                setErrors((prevErrors) => ({ ...prevErrors, specializations: error }));
                return { ...prevDoctor, specializations: newSpecializations };
            });
        } else {
            const error = validateField(name, value);
            setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
            setNewDoctor({ ...newDoctor, [name]: value });
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = {};
        Object.keys(newDoctor).forEach((key) => {
            const error = validateField(key, newDoctor[key]);
            if (error) formErrors[key] = error;
        });

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        if (newDoctor.img_url == null) {
            newDoctor.img_url = newDoctor.sex === "man"
                ? "https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png"
                : "https://static.vecteezy.com/system/resources/previews/041/409/060/non_2x/ai-generated-a-female-doctor-with-a-stethoscope-isolated-on-transparent-background-free-png.png";
        }

        try {
            const response = await axios.post("http://localhost:3000/doctors", newDoctor);
            console.log("Success:", response.data);
            window.location.href = "http://localhost:5173/doctors";
            alert("Success! Your profile has been added successfully");
        } catch (error) {
            if (error.response && error.response.status === 500) {
                // Analizza il messaggio di errore dal backend
                const errorMessage = error.response.data.message || "An error occurred";
                if (errorMessage.includes("email")) {
                    setErrors((prevErrors) => ({ ...prevErrors, email: "Email already exists" }));
                } else if (errorMessage.includes("phone")) {
                    setErrors((prevErrors) => ({ ...prevErrors, phone: "Phone number already exists" }));
                } else if (errorMessage.includes("serial_number")) {
                    setErrors((prevErrors) => ({ ...prevErrors, serial_number: "Serial number already exists" }));
                } else {
                    alert("An error occurred. Please try again.");
                }
            } else {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            }
        }
    }

    return (
        <div className="container">
            <div className="m-5">
                <form onSubmit={handleSubmit} className={`mt-2 pb-5 bg-light rounded-3 ${style.badge}`} autoComplete="off">
                    <h1 className={`p-3 d-flex justify-content-center text-white ${style.headerForm}`}>Join us</h1>
                    <p className="form-warning mb-2 p-2 text-center">
                        Fields that start with <strong> * </strong> are required (you can't leave them empty).
                    </p>

                    <div className="px-3">
                        {/* name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">*Insert your <strong>Name</strong></label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                id="name"
                                name="name"
                                placeholder="EX. Jhon"
                                value={newDoctor.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

                        {/* surname */}
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">*Insert your <strong>Surname</strong></label>
                            <input
                                type="text"
                                className={`form-control ${errors.surname ? "is-invalid" : ""}`}
                                id="surname"
                                name="surname"
                                placeholder="EX. Doe"
                                value={newDoctor.surname}
                                onChange={handleChange}
                                required
                            />
                            {errors.surname && <div className="invalid-feedback">{errors.surname}</div>}
                        </div>

                        {/* specializations */}
                        <div className="mb-3">
                            <label htmlFor="specializations" className="form-label">*Choose your <strong>Specializations</strong></label>
                            <div className={`row ${style.specializationsList}`}>
                                {specializations.map((specialization, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 mb-2">
                                        <div className="form-check">
                                            <input
                                                className={`form-check-input ${errors.specializations ? "is-invalid" : ""}`}
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
                            {errors.specializations && <div className="invalid-feedback d-block">{errors.specializations}</div>}
                        </div>

                        {/* email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">*Insert your <strong>Email Address</strong></label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                id="email"
                                name="email"
                                placeholder="EX. jhon@doe.com"
                                value={newDoctor.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        {/* phone */}
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">*Insert your <strong> Mobile Number</strong></label>
                            <input
                                pattern="[0-9]{10,15}"
                                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                id="phone"
                                name="phone"
                                placeholder="EX. 1234567890"
                                value={newDoctor.phone}
                                onChange={handleChange}
                                required
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>

                        {/* office_address */}
                        <div className="mb-3">
                            <label htmlFor="office_address" className="form-label">*Insert your <strong>Office Address</strong></label>
                            <input
                                type="text"
                                className={`form-control ${errors.office_address ? "is-invalid" : ""}`}
                                id="office_address"
                                name="office_address"
                                placeholder="EX. OfficeAddress ST. 1500"
                                value={newDoctor.office_address}
                                onChange={handleChange}
                                required
                            />
                            {errors.office_address && <div className="invalid-feedback">{errors.office_address}</div>}
                        </div>

                        {/* serial_number */}
                        <div className="mb-3">
                            <label htmlFor="serial_number" className="form-label">*Insert your <strong>Serial Number</strong> </label>
                            <input
                                type="text"
                                className={`form-control ${errors.serial_number ? "is-invalid" : ""}`}
                                id="serial_number"
                                name="serial_number"
                                placeholder="EX. SN123456"
                                value={newDoctor.serial_number}
                                onChange={handleChange}
                                required
                            />
                            {errors.serial_number && <div className="invalid-feedback">{errors.serial_number}</div>}
                        </div>

                        {/* sex */}
                        <div className="mb-3 d-flex flex-column align-items-center">
                            <label htmlFor="sex" className="form-label">*Choose your <strong>Gender</strong> </label>
                            <div id="sex" className="ms-2 d-flex">
                                {/* male */}
                                <div className="form-check">
                                    <input
                                        className={`form-check-input ${errors.sex ? "is-invalid" : ""}`}
                                        type="radio"
                                        name="sex"
                                        id="m-sex"
                                        value="man"
                                        checked={newDoctor.sex === "man"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="m-sex">
                                        Male
                                    </label>
                                </div>

                                {/* female */}
                                <div className="form-check ms-3">
                                    <input
                                        className={`form-check-input ${errors.sex ? "is-invalid" : ""}`}
                                        type="radio"
                                        name="sex"
                                        id="f-sex"
                                        value="woman"
                                        checked={newDoctor.sex === "woman"}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="f-sex">
                                        Female
                                    </label>
                                </div>
                            </div>
                            {errors.sex && <div className="invalid-feedback d-block">{errors.sex}</div>}
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