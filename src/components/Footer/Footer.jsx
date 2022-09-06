import styles from "./Footer.module.css"
import AudioPlayer from "./AudioPlayer/AudioPlayer";

const Footer = ({ context,  setAudioRef }) => {

    return (
        <div className = { styles.footer }>
            <AudioPlayer context = { context } setAudioRef = { setAudioRef }/>
        </div>
    )
}

export default Footer