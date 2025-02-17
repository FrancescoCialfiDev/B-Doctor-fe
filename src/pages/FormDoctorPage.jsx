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
        axios.post(`http://localhost:3000/doctors`, newDoctor)
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
        //aggiungere pop un ponferma o il ritorno alla pagina dei doctors
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
        <div className="bg-white d-flex justify-content-center flex-column align-items-center" >
            <h1>Registration Precess</h1>
            <form onSubmit={handleSubmit} className="bg-light rounded-3">
                {/* sistemare i placeholder */}
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
                    <label htmlFor="surname" className="form-label">Insert your <strong>Surname</strong></label>
                    <input
                        className="form-control"
                        id="surname"
                        name="surname"
                        placeholder="Doe"
                        value={newDoctor.surname}
                        onChange={handleChange}
                    ></input>
                </div>

                {/* email */}
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Insert your <strong>Email Address</strong></label>
                    <input
                        type="email"
                        className="form-control "
                        id="email"
                        name="email"
                        placeholder="es. jhon@doe.com"
                        value={newDoctor.email}
                        onChange={handleChange}
                    />
                </div>

                {/* phone */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Insert your <strong> Mobile Number</strong></label>
                    <input
                        pattern="[0-9]{3}[0-9]{7}" required
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="1234567890"
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
                        placeholder="OfficeAddres ST. 1500"
                        value={newDoctor.office_addres}
                        onChange={handleChange}
                    />
                </div>

                {/* serial_number */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Insert your <strong>Serial Number</strong> </label>
                    <input
                        min="100000"
                        max="999999"
                        type="text"
                        className="form-control"
                        id="serial_number"
                        name="serial_number"
                        placeholder="SN123456"
                        value={newDoctor.serial_number}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </div >

    );
}