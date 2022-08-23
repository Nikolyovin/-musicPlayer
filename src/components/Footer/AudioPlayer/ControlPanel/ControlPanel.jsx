import Buttons from "./Buttons/Buttons"
import styles from "./ControlPanel.module.css"


const ControlPanel = ({ togglePlayPause, isPlaying }) => {
   

    return (
        <Buttons togglePlayPause = { togglePlayPause } isPlaying = { isPlaying }/>
    )
       
}

export default ControlPanel