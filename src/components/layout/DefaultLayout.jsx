import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./footerComponent";
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