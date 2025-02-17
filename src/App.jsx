import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/layout/DefaultLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import DoctorsPage from "./pages/DoctorsPage.jsx"
import DoctorDetailsPage from "./pages/DoctorDetailsPage.jsx"
import ReviewsComponent from "./components/common/reviews/ReviewsComponent.jsx"
import FormDoctorPage from "./pages/FormDoctorPage.jsx"
import ContactsComponent from "./components/common/ContactsComponent.jsx"
import { GlobalProvider } from "./contexts/GlobalContext.jsx"

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />


            <Route path="/formDoctor" element={<FormDoctorPage />} />

            <Route path="/doctors">
              <Route index element={<DoctorsPage />} />

              <Route path=":id" element={<DoctorDetailsPage />}>
                <Route path="reviews" element={<ReviewsComponent />} />
                <Route path="contacts" element={<ContactsComponent />} />
              </Route>
            </Route>
            <Route path="/formDoctor" element={<FormDoctorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}
