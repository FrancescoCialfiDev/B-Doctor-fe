import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";
import RealCarouselComponent from "../common/RealCarouselComponent";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <main>


                <Outlet />

            </main>
            <FooterComponent />
        </>
    )
}