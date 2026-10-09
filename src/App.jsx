import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./protected-routes/ProtectedRoute";


const App = () => {



  return (<>
    <Routes>

      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users/:userId" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        {/* Add your pages here for auth */}

        {/* <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} /> */}

        <Route path="/auth/login" element={<LoginPage />} />
      </Route>


    </Routes>
  </>)
}

export default App;