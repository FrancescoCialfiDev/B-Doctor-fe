import styles from "./ReviewCard.module.css";
import StarsComponent from "../StarsComponent";

export default function ReviewCard({ review }) {

    return (
        <>
            < div className="container mt-4 d-flex justify-content-center">
                <div className={`${styles.review_card}`}>
                    <div className={`${styles.review_header} custom`}>
                        <span>{review?.name_patient}</span>
                        <span className={styles.stars}>
                            <StarsComponent vote={review?.vote} />
                        </span>
                    </div>
                    <div className={`${styles.review_body}` + " d-flex justify-content-between"}>
                        <div>{review?.description}</div>
                        <div>{review?.creation_date}</div>
                    </div>
                </div>
            </div >
        </>
    )
}