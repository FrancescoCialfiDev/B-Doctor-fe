import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";

export default function StarsComponent({ vote }) {
    const voteUser = vote
    const starsUser = []
    for (let index = 0; index < 5; index++) {
        if (starsUser.length < voteUser) {
            starsUser.push(<IoStarSharp key={index} style={{ color: "#f7af11", fontSize: "2rem" }} />)
        } else {
            starsUser.push(<RiStarSLine key={index} style={{ color: "#f7af11", fontSize: "2rem" }} />)
        }
    }
    return starsUser;
}