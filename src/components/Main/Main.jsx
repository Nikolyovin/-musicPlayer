import Visualizer from "./Visualizer/Visualizer"
import styles from "./Main.module.css"
import Playlist from "./Playlist/Playlist"

const Main = ({ setContext, audioRef }) => {

    return (
        <div className = { styles.mainWrap}>
            <Visualizer audioRef = { audioRef } setContext = { setContext }/>
            <Playlist />
        </div>
    )
}

export default Main