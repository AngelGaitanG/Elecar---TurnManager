import styles from "../Navbar.module.css"

const Menu = () => {
    return (
        <div className={styles.menu}>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}><a href="#">Home</a></li>
                <li className={styles.menuItem}><a href="#">About</a></li>
                <li className={styles.menuItem}><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu