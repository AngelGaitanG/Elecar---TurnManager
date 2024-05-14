import welcomeMessage from "../../helpers/principalSection";
import DesSection from "./desSection/DesSection";
import ImageSection from "./imageSection/ImageSection";
import styles from "/src/components/principalSection/PrincipalSection.module.css";


const PrincipalSection = () => {

    return (
        <div className={styles.principalSection}>
            <DesSection welcomeMessage={welcomeMessage}/>
            <ImageSection />
        </div>
    )

}

export default PrincipalSection;