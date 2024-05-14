import { Link } from "react-router-dom"
import styles from "../Navbar.module.css"

const RegisterButton = () => {
    return (
        <div className={styles.registerContainer}>
            <Link to={"/register"}><button  className={styles.registerButton}>Register</button></Link>
        </div>
    )
}

export default RegisterButton