import { Link } from "react-router-dom"
import styles from "../Navbar.module.css"
import { useSelector } from "react-redux"

const Menu = () => {
    const logged = useSelector(state => state.user.userData.token)

    return (
        <div className={styles.menu}>
            <ul className={styles.menuList}>
                <Link to={"/"} className={styles.menuItem}>Home</Link>
                <Link to={"/about"} className={styles.menuItem}>About</Link>
                <Link to={"/contact"} className={styles.menuItem}>Contact</Link>
                {logged && <Link to={"/mis-turnos"} className={styles.menuItem}>Mis Turnos</Link>}
                {logged && <Link to={"/make-appointment"} className={styles.menuItem}>Pedir Turno</Link>}
            </ul>
        </div>
    )
}

export default Menu