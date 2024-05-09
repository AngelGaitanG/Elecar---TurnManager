import styles from "./Navbar.module.css"
import Logo from "./navBarComponents/Logo"
import Menu from "./navBarComponents/Menu"
import RegisterButton from "./navBarComponents/RegisterButton"


const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <Logo />
                <Menu />
                <RegisterButton />
            </div>
        </div>
    )
}

export default Navbar