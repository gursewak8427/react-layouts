import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const [passwordView, setPasswordView] = useState(false)
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (<>
        <div className="login-page">
            <h1>Login Here.</h1>

            <div className="form">
                <div className="input-group">
                    <label htmlFor="input-email">Email</label>
                    <input
                        type="text"
                        id="input-email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="input-password">Password</label>
                    <div className="input-pass-group">
                        <input
                            type={passwordView ? 'text' : 'password'}
                            id="input-password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                        <div
                            className="eye"
                            onClick={() => {
                                setPasswordView(!passwordView)
                            }}>
                            {
                                passwordView ?
                                    <FaEyeSlash /> :
                                    <FaEye />
                            }
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </>)
}

export default LoginPage;