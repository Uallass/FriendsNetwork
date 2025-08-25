import { useLocation } from "react-router-dom"

const Profile = () => {
    const location = useLocation()
    const user = location.state
    return (
        <div className="text-2xl text-center text-gray-900">
            <h1>Profile</h1>
            {user ? <h2>Welcome, {user}!</h2> : null}
        </div>
    )
}

export default Profile;