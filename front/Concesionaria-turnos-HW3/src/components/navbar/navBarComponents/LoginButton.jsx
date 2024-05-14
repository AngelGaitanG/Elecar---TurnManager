import { Link } from "react-router-dom"
import styles from "../Navbar.module.css"


const LoginButton = () => {

    return (
        <div className={styles.loginContainer}>
            <Link to="/login"><button className={styles.loginButton}>Login</button></Link>
        </div>
    )
}
export default LoginButton