import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate(); // ML

    const [loading, setLoading] = useState(true)

    const isLogin = true; // FALSE

    useEffect(() => {
        setTimeout(() => {
            if (!isLogin) {
                navigate("/auth/login")
            } else {
                setLoading(false)
            }
        }, 2000)
    }, [isLogin])

    if (loading) {
        return "Please wait, Its Loading..."
    }

    return children;
}

export default ProtectedRoute;