import styles from "../Contact/Contact.module.css"

const Contact = () => {

    return(
        <div className={styles.container}>
            <h1>Contact</h1>
            <div>
                <p>Direcion: Calle Novena 1999 - Islas Malvinas - Argentina</p>
                <p>Email: angelelmejor@live.com.ar</p>
                <p>Phone: 2224-1234-5678</p>
                <p>Social: <a href="">Instagram</a> - <a href="">Youtube</a></p>
            </div>
        </div>
    )
}

export default Contact