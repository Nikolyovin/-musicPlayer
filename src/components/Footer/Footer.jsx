import styles from "./Footer.module.css"
import AudioPlayer from "./AudioPlayer/AudioPlayer";

const Footer = () => {

    return (
        <div className={styles.footer}>
            {/* <ProgressBar track={track}/> */}
            <AudioPlayer/>
            
        </div>
    )
}

export default Footer