import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/layout/DefaultLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import DoctorsPage from "./pages/DoctorsPage.jsx"
import DoctorDetailsPage from "./pages/DoctorDetailsPage.jsx"
import ReviewsComponent from "./components/common/reviews/ReviewsComponent.jsx"
import FormReviewComponent from "./components/common/reviews/FormReviewComponente.jsx"
import FormDoctorPage from "./pages/FormDoctorPage.jsx"
import AllSpecialistsPage from "./pages/AllSpecialistsPage.jsx"
import { GlobalProvider } from "./contexts/GlobalContext.jsx"


export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/specializations" element={<AllSpecialistsPage />} />
            <Route path="/specializations/:id" element={<AllSpecialistsPage />} />


            <Route path="/formDoctor" element={<FormDoctorPage />} />

            <Route path="/doctors">
              <Route index element={<DoctorsPage />} />

              <Route path=":id" element={<DoctorDetailsPage />}>
                <Route path="reviews" element={<ReviewsComponent />} />
                <Route path="form" element={<FormReviewComponent />} />
              </Route>
            </Route>
            <Route path="/formDoctor" element={<FormDoctorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}
