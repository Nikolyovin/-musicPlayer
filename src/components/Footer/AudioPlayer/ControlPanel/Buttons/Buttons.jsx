import styles from "./Buttons.module.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import { grey } from "@mui/material/colors"
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { Button, IconButton } from "@mui/material"

const Buttons = ({ togglePlayPause, isPlaying, playNextTrack, currentTrack }) => {
    
    return (
        <div className = { styles.buttonWrap }>
            <Button 
                variant="contained"
                color="secondary"
                sx = {{ mr:1}}
                onClick = { togglePlayPause } 
                disabled = { !currentTrack }>
                
                { 
                    isPlaying 
                    ? <PauseIcon  fontSize="large" sx={{ color: grey[ 500 ] }}/>      
                    : <PlayArrowIcon fontSize="large" sx={{ color: grey[ 500 ] }}/>  
                }
            </Button>
            <Button 
                variant="contained"
                color="secondary"
                // className = { currentTrack ? styles.button : styles.buttonDisabled } 
                onClick = { playNextTrack }
                disabled = { !currentTrack }  >
                <SkipNextIcon fontSize = "large" sx = {{ color: grey[ 500 ] }}/>
            </Button>
        </div>
    )
}

export default Buttons