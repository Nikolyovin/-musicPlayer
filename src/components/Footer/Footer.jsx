import styles from "./Footer.module.css"
import AudioPlayer from "./AudioPlayer/AudioPlayer";

const Footer = () => {

    return (
        <div className={styles.footer}>
            <AudioPlayer/>
        </div>
    )
}

export default Footer