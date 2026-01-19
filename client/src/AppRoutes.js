import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp.tsx";
import { HomePage } from "./components/HomePage.tsx";
import { ReservationForm } from "./components/ReservationForm.tsx";
import { LoginForm } from "./components/LoginForm.tsx";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reservation/:courtId" element={<ReservationForm />} />
      </Routes>
    </Router>
  );
};
