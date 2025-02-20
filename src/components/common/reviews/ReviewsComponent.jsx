import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import ReviewCard from "./ReviewCard"

export default function ReviewsComponent() {

    const [detailsDoctor, setDetailsDoctors] = useState([]);
    const { id } = useParams();
    console.log(detailsDoctor)

    function getDetailsDoctors() {
        axios
            .get(`http://localhost:3000/doctors/${id}`)
            .then((response) => {
                setDetailsDoctors(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally("Data fetch completed!")
    }

    useEffect(() => { getDetailsDoctors() }, [])

    return (
        <>
            {detailsDoctor?.reviews?.map((review) => {
                return (
                    <ReviewCard key={review?.id} review={review} />
                )

            })}
        </>
    )
} 