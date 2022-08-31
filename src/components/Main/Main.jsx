// import Equalizer from "./Equalizer/Equalizer"
import EqualizerClass from "./Equalizer/EqualizerClass"

// import EqualizerClassMicro from "./Equalizer/EqualizerClassMicro"
//  import Visualizer from "./Equalizer/Visualizer"
// import VisualizerHabr from "./Equalizer/VisualizerHabr"
import Visualizer from "./Equalizer/Visualizer"
import styles from "./Main.module.css"
import Player from "./Player/Player"

const Main = () => {
    return (
        <div className = { styles.mainWrap}>
            {/* <EqualizerClassMicro/> */}
            <EqualizerClass/>
            {/* <Equalizer/> */}
            {/* <VisualizerHabr/> */}
            {/* <Visualizer/> */}
            <Player/>
        </div>
    )
}

export default Main