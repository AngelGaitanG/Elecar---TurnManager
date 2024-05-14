import { Link } from "react-router-dom"
import styles from "../Navbar.module.css"

const Menu = () => {
    return (
        <div className={styles.menu}>
            <ul className={styles.menuList}>
                <Link to={"/"} className={styles.menuItem}>Home</Link>
                <Link to={"/about"} className={styles.menuItem}>About</Link>
                <Link to={"/contact"} className={styles.menuItem}>Contact</Link>
                <Link to={"/mis-turnos"} className={styles.menuItem}>Mis Turnos</Link>
            </ul>
        </div>
    )
}

export default Menu