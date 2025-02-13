import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/layout/DefaultLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import DoctorsPage from "./pages/DoctorsPage.jsx"
import DoctorDetailsPage from "./pages/DoctorDetailsPage.jsx"
import ReviewsPage from "./pages/ReviewsPage.jsx"
import ContactsPage from "./pages/ContactsPage.jsx"
import { GlobalProvider } from "./contexts/GlobalContext.jsx"

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/doctors">
              <Route index element={<DoctorsPage />} />
              <Route path=":id" element={<DoctorDetailsPage />}>
                <Route path="reviews" element={<ReviewsPage />} />
                <Route path="contacts" element={<ContactsPage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}
