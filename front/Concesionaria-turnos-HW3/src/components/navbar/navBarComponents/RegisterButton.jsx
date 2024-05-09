import styles from "../Navbar.module.css"

const RegisterButton = () => {
    return (
        <div className={styles.registerContainer}>
            <button className={styles.registerButton}>Register</button>
        </div>
    )
}

export default RegisterButton