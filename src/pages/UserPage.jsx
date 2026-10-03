import { useParams } from "react-router-dom";

const UserPage = () => {
    const { userId } = useParams();

    return (<>
        <div className="userpage">
            Hello from user id : {userId}
        </div>
    </>)
}

export default UserPage;