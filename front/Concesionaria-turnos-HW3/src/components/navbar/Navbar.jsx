import styles from "./Navbar.module.css"
import Logo from "./navBarComponents/Logo"
import Menu from "./navBarComponents/Menu"
import RegisterButton from "./navBarComponents/RegisterButton"
import LoginButton from "./navBarComponents/LoginButton"
import { useSelector, useDispatch } from "react-redux"
import { setUserAppointments, setUserData } from "../../redux/reducer"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        if(window.confirm("Quieres salir?")) {
            dispatch(setUserData({}));
            dispatch(setUserAppointments([]));
            navigate("/login");
        }
    }
    const logged = useSelector(state => state.user.userData.login)
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Logo />
                <Menu />
                {!logged && <LoginButton />}
                {!logged && <RegisterButton />}
                {logged && <button className={styles.logout} onClick={logout}>Logout</button>}
            </div>
        </div>
    )
}

export default Navbar