import { useState } from "react"
import VisualixerFunc from "./Equalizer/VisualixerFunc"
import styles from "./Main.module.css"
import Player from "./Player/Player"

const Main = ({ setContext, audioRef }) => {
    
    
    console.log('audioRefMain:', audioRef)


    return (
        <div className = { styles.mainWrap}>
            {/* <EqualizerClassMicro/> */}
            {/* <EqualizerClass/> */} 
            <VisualixerFunc audioRef = { audioRef } setContext = { setContext }/>
            {/* <EqualizerOld/> */}
            {/* <VisualizerHabr/> */}
            {/* <Visualizer/> */}
            {/* <Vis/> */}
            <Player />
        </div>
    )
}

export default Main