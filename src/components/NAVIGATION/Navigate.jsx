import { useNavigate } from "react-router-dom";

function UserNavigation() {

    const navigate = useNavigate();

    const goToUser = (id) => {
        navigate(`/user/${id}`);
    }

    return (
        <>
            <div>
                <button onClick={() => goToUser(1)}>User 1</button>
                <button onClick={() => goToUser(2)}>User 2</button>
                <button onClick={() => goToUser(3)}>User 3</button>
            </div>
        </>
    );
}

export default UserNavigation;
