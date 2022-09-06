import styles from "./Buttons.module.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import { grey } from "@mui/material/colors"
import SkipNextIcon from '@mui/icons-material/SkipNext'

const Buttons = ({ togglePlayPause, isPlaying, playNextTrack, currentTrack }) => {
    
    return (
        <div className = { styles.buttonWrap }>
            <button 
                className = { currentTrack ? styles.button : styles.buttonDisabled } 
                onClick = { togglePlayPause } 
                disabled = { !currentTrack }
            >
                { 
                    isPlaying 
                    ? <PauseIcon  fontSize="large" sx={{ color: grey[ 500 ] }}/>      
                    : <PlayArrowIcon fontSize="large" sx={{ color: grey[ 500 ] }}/>  
                }
            </button>
            <button 
                className = { currentTrack ? styles.button : styles.buttonDisabled } 
                onClick = { playNextTrack }
                disabled = { !currentTrack }  >
                <SkipNextIcon fontSize = "large" sx = {{ color: grey[ 500 ] }}/>
            </button>
        </div>
    )
}

export default Buttons