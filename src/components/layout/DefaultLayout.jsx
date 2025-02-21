import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <main>
                <section className="container">
                    <Outlet />
                </section>
            </main>
            <FooterComponent />
        </>
    )
}