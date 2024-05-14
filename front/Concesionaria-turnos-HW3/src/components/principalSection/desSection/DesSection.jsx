/* eslint-disable */

import styles from "../PrincipalSection.module.css"

const DesSection = ({welcomeMessage:{title, subtitle, description}}) => {
    return (

        <div className={styles.desSection}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <p>{description}</p>            
        </div>
    )
}

export default DesSection