import styles from "./Navbar.module.css"
import Logo from "./navBarComponents/Logo"
import Menu from "./navBarComponents/Menu"
import RegisterButton from "./navBarComponents/RegisterButton"
import LoginButton from "./navBarComponents/LoginButton"

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Logo />
                <Menu />
                <LoginButton/>
                <RegisterButton />
            </div>
        </div>
    )
}

export default Navbar