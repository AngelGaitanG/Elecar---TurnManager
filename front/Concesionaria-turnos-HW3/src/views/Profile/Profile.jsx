import { useState } from "react";
import styles from "./Profile.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setImageProfile } from "../../redux/reducer";


const Profile = () => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.user.userData.user.id)
    const [file, setFile] = useState(null);
    const handleUpload = (e) => {
        console.log("click")
        e.preventDefault();
        if (!file) {
            console.log("No se ha seleccionado ningún archivo");
            return;
        } else {
            console.log("entraste al archivo")
            const formData = new FormData();
            formData.append('file', file);
            axios.post(`http://localhost:3000/users/${id}/configuration`, formData)
            .then((response) => {
                console.log(response.data.imageUrl);
                dispatch(setImageProfile(response.data.imageUrl));})
                .catch(err => console.log(err));
        }
    };

    return (
        <div className={styles.containerView}>
            <div className={styles.containerProfile}>
                <div className={styles.containerLeft}>
                    <h2>Profile</h2>
                    <button>Aca ira algo</button>
                    <button>Aca ira algo</button>
                    <button>Aca ira algo</button>
                </div>
                <div className={styles.containerRight}>
                    <h2>Configuracion</h2>
                    <form onSubmit={handleUpload} encType="multipart/form-data">
                        <div>
                            <label>Cambiar foto</label>
                            <input type="file" onChange={e => setFile(e.target.files[0])} />
                            <button type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;