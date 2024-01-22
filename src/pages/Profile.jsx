import { useSelector } from 'react-redux'
import { selectUser } from 'redux/auth.selectors';

const Profile = () => {
    const user = useSelector(selectUser);
    console.log(user);
    return <div>
        <p>Profile</p> 
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    <img src={user.avatarURL} alt="user" />   

    </div> 
}

export default Profile;