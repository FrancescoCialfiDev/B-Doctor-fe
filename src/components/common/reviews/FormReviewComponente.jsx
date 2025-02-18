import { useState } from "react";
import axios from "axios";

const initialReview = {
    name_patient: "",
    vote: "",
    description: "",
    id_doctor: "",
};

export default function FormReviewComponent({ id_doctor }) {

    const [newReview, setNewReview] = useState(initialDoctor);

    function sendData() {
        axios.post(`http://localhost:3000/`, newReview)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err))
            .finally(() => {
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendData();
        setNewDoctor(initialReview);
        window.location.reload();
        console.log(newReview)
        //aggiungere pop un ponferma o il ritorno alla pagina dei doctors
    }

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(`Updating ${name} to ${value}`);
        setNewDoctor({ ...newReview, [name]: value, });
        console.log(newReview)
    }

    return (
        <div className="m-5">
            <h1 className="mb-5 d-flex justify-content-center">Registration Precess</h1>
            <p className="form-waring">Champs that starts whit <strong>"*"</strong> are required (you can't leave them empty)</p>
            <form onSubmit={handleSubmit} className="bg-light rounded-3">

                {/* name */}
                <div className="gap-5 justify-content-center">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">*Insert your <strong>Name</strong></label>
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

                    {/* content */}
                    <div className="mb-3">
                        <label htmlFor="surname" className="form-label">*Insert your <strong>Surname</strong></label>
                        <input
                            className="form-control"
                            id="surname"
                            name="surname"
                            placeholder="Doe"
                            value={newDoctor.surname}
                            onChange={handleChange}
                            required
                        ></input>
                    </div>

                    {/* vote */}
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">*Write your <strong> vote</strong></label>
                        <input
                            min="0"
                            max="10"
                            step="1"
                            type="number"
                            pattern="[0-9]{3}[0-9]{7}"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="write a number bwtween 1 and 10"
                            value={newDoctor.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary mt-4 ">Submit</button>
                </div>

            </form >
        </div >

    );
}