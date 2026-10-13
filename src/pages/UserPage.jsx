import { useForm, } from "react-hook-form"

// import { useParams } from "react-router-dom";

// const UserPage = () => {
//     const { userId } = useParams();

//     return (<>
//         <div className="userpage">
//             Hello from user id : {userId}
//         </div>
//     </>)
// }

const UserPage = () => {
    const { register, handleSubmit, formState, watch, setValue, } = useForm()
    const { errors, isSubmitting } = formState;

    // get the update value, read for a single field
    const userName = watch("fullName")

    console.log(errors)

    const submitForm = async (data) => {

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("OK")
            }, 5000)
        })

        console.log(data)
    }


    return (<>

        <form onSubmit={handleSubmit(submitForm)} className="form-div">
            <h1>Hello {userName}!</h1>
            {isSubmitting ? "Please wait..." : <></>}
            <div className="input-group">
                <input type="text" placeholder="Enter Full Name" {...register("fullName", {
                    required: "Full Name is required"
                })} />
                {errors.fullName ? <p className="error-text">{errors.fullName.message}</p> : <></>}
            </div>

            <input type="email" placeholder="Enter Email" {...register("email")} />
            <input type="date" placeholder="Enter DOB" {...register("dob")} />

            <button type="button" onClick={() => {
                setValue("email", "prismaple@gmail.com")
            }}>Set Email to Prismaple</button>

            <button type="submit" disabled={isSubmitting}>Submit</button>
        </form>

    </>)
}

export default UserPage;