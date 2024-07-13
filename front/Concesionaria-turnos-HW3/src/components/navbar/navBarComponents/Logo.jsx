import styles from "../Navbar.module.css"

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logoImg} src="assets2\logo.png" />
        </div>
    )
}

export default Logo