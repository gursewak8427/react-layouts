import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (<>
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/users/123456">User</NavLink>
        </nav>
    </>)
}

export default Navbar;