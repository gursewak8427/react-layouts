import { useState } from "react";

const AboutPage = () => {
    const [formValues, setFormValues] = useState({
        student_age: "",
        student_name: ""
    })

    const handleChange = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value

        // dynamic key with square bracket
        // dynamic value
        const newFormValues = {
            ...formValues, // spread operator
            [inputName]: inputValue,
        }

        setFormValues(newFormValues)
    }

    return (<>
        <div className="about">
            <h1>About Page : Forms</h1>

            <label htmlFor="s_age">Student Age</label>
            {/* Fixed Value */}
            <input
                type="text"
                name="student_age"
                id="s_age"
                onChange={handleChange}
                value={formValues.student_age}
            />

            <br />

            <label htmlFor="s_name">Student Name</label>
            {/* Fixed Value */}
            <input
                type="text"
                name="student_name"
                id="s_name"
                onChange={handleChange}
                value={formValues.student_name}
            />

        </div>
    </>)
}

export default AboutPage;