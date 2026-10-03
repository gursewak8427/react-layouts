import { useNavigate } from "react-router-dom"

const AuthNavbar = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }

    return (<>
        <nav className="navbar-auth">
            <h1 onClick={goToHome}>LOGO</h1>
        </nav>
    </>)
}

export default AuthNavbar;