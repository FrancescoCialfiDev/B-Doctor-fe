import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./FormReviewComponente.module.css";

const initialReview = {
    name_patient: "",
    vote: "",
    description: "",
    creation_date: ""
};

export default function FormReviewComponent() {
    const { id } = useParams();

    const [newReview, setNewReview] = useState(initialReview);

    function sendData() {
        axios.post(`http://localhost:3000/doctors/${id}/form`, newReview)
            .then((res) => console.log("Success:", res.data))
            .catch((err) => console.error("Error:", err));
    }

    function handleSubmit(e) {
        const today = new Date();
        const year = today.getFullYear();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        newReview.creation_date = formattedDate;
        console.log(newReview);
        e.preventDefault();
        sendData();
        setNewReview(initialReview);
        window.location.href = `http://localhost:5173/doctors/${id}/reviews`
        alert("Success! Your review has being added succesfully")
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setNewReview(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="m-5" >
            <form onSubmit={handleSubmit} className={`${style.badge} bg-light rounded-3`}>
                <h1 className={`${style.header} d-flex align-items-center justify-content-center`}>Add new review:</h1>
                {/* Name */}
                <div className="p-3">
                    <div className="mb-3">
                        <label htmlFor="name_patient" className="form-label">Insert your <strong>Name</strong></label>
                        <input type="text" className="form-control" id="name_patient" name="name_patient" value={newReview.name_patient} onChange={handleChange} />
                    </div>

                    {/* Description */}
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Insert your <strong>Comment</strong></label>
                        <textarea className="form-control" id="description" name="description" value={newReview.description} onChange={handleChange} />
                    </div>

                    {/* Vote */}
                    <div className="d-flex justify-content-center align-items-center flex-column mb-3">
                        <label htmlFor="vote" className="form-label">*Write your <strong>Vote</strong></label>
                        <input type="number" min="1" max="10" step="1" className={`${style.voteArea} form-control`} id="vote" name="vote" value={newReview.vote} onChange={handleChange} required />
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </div>
            </form>
        </div >
    );
}
