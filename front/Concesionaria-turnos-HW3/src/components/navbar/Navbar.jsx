import styles from "./Navbar.module.css"
import Logo from "./navBarComponents/Logo"
import Menu from "./navBarComponents/Menu"
import RegisterButton from "./navBarComponents/RegisterButton"
import LoginButton from "./navBarComponents/LoginButton"
import { useSelector } from "react-redux"

const Navbar = () => {
    const logged = useSelector(state => state.user.userData.login)
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Logo />
                <Menu />
                {!logged && <LoginButton />}
                {!logged && <RegisterButton />}
            </div>
        </div>
    )
}

export default Navbar