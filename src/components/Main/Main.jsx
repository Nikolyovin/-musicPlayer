import Equalizer from "./Equalizer/Equalizer"
import styles from "./Main.module.css"
import Player from "./Player/Player"

const Main = () => {
    return (
        <div className = { styles.mainWrap}>
            <Equalizer/>
            <Player/>
        </div>
    )
}

export default Main