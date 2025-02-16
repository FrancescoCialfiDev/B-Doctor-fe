import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GlobalProvider, GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

const initialDoctor = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    office_addres: "",
    serial_number: "",
};

export default function FormDoctorPage({ overlay }) {
    const { doctors, setDoctors } = useContext(GlobalContext);
    const [newDoctor, setNewDoctor] = useState(initialDoctor);

    const { id } = useParams();

    function sendData() {
        axios.post(`http://localhost:3000/books/reviews/${id}`, newDoctor)
            .then((res) => {
                console.log(res.data);
                setNewDoctor([...doctors, newDoctor]);
            })
            .catch((err) => console.log(err))
            .finally(() => {
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendData();
        setNewDoctor(initialDoctor);
        window.location.reload();
    }

    function handleChange(e) {
        const { name, value } = e.target;
        //console.log(`Updating ${name} to ${value}`);
        setNewDoctor({
            ...newDoctor,
            [name]: value,
        });
    }

    return (
        <div className={`${overlay} overlayForm  position-absolute t-0 l-0 w-100 h-100 d-flex justify-content-center flex-column align-items-center`}>
            <form onSubmit={handleSubmit} className="w-50 bg-white p-5 rounded-3">

                {/* name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Insert your <strong>Name</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Jhon"
                        value={newDoctor.name}
                        onChange={handleChange}
                    />
                </div>

                {/* surname */}
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Insert your <strong>Serial Number</strong></label>
                    <textarea
                        className="form-control"
                        id="text"
                        name="surname"
                        rows="3"
                        placeholder="Doe"
                        value={newDoctor.surname}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* email */}
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Insert your <strong>E-mail Address</strong></label>
                    <input
                        type="email"
                        min="0"
                        max="5"
                        step="1"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your E-mail Address"
                        value={newDoctor.email}
                        onChange={handleChange}
                    />
                </div>

                {/* phone */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Insert your <strong> Mobile Number</strong></label>
                    <input
                        pattern="[0-9]{3}-[0-9]{7}" required
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="123-4567890"
                        value={newDoctor.phone}
                        onChange={handleChange}
                    />
                </div>

                {/* office_addres */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Insert your <strong>Office Addres</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        id="office_addres"
                        name="office_addres"
                        placeholder="Enter your Office Addres"
                        value={newDoctor.office_addres}
                        onChange={handleChange}
                    />
                </div>

                {/* serial_number */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Insert your <strong>Serial Number</strong> (do not include <strong>SN</strong>)</label>
                    <input
                        min="100000"
                        max="999999"
                        type="number"
                        className="form-control"
                        id="username"
                        name="name"
                        placeholder="123456"
                        value={`SN${newDoctor.serial_number}`}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
}