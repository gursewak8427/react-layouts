import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const userId = 8000
    const navigate = useNavigate();

    const handleLogin = () => {
        // suppose api login success
        navigate("/about")
    }

    const handleUserPage = () => {
        navigate(`/users/${userId}`)
    }


    return (<>
        <div className="home">
            Hello From Home Page

            <br />

            <button onClick={handleLogin}>Go to About</button>

            <br />

            <button onClick={handleUserPage}>Go to User Page</button>

        </div>
    </>)
}

export default HomePage;