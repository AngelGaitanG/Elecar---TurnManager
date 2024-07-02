import { useSelector } from "react-redux"
import styles from "../navbar/Navbar.module.css"
const ProfileIcon = () => {
    const fotito = useSelector(state => state.user.userData.user.imageUrl)


    return (
        
        <div className={styles.profile}>
            <img src={fotito} alt="profile" />
        </div>
    )
}
export default ProfileIcon