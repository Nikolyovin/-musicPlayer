import MusicCard from "../../../Main/Playlist/Songs/MusicCard/MusicCard"
import Buttons from "./Buttons/Buttons"
import styles from "./ControlPanel.module.css"
import ListIcon from '@mui/icons-material/List'
import { grey } from "@mui/material/colors"
import stylesButton from "./Buttons/Buttons.module.css"
import { useDispatch } from "react-redux"
import { isOpenList, nextTrack } from "../../../../redux/playerReducer"
import { Button } from "@mui/material"

const ControlPanel = ({ togglePlayPause, isPlaying, currentTrack, setIsPlaying }) => {
    const dispatch = useDispatch()
    const styleColor = 'styleColor'            //MusicCard используется в двух местах и с разным цветом
    const currentTrackId = currentTrack?.id
    
    const toggelePlaylist = () => {
        dispatch(isOpenList())
    }

    const playNextTrack = () => {
        setIsPlaying(false)
        dispatch(nextTrack(currentTrackId))
    }
    
    return (
        <div className = { styles.controlPanel }>
            <div className = { styles.controlPanelLeft }>
                <Buttons 
                    togglePlayPause = { togglePlayPause } 
                    isPlaying = { isPlaying } 
                    playNextTrack = { playNextTrack }
                    currentTrack = { currentTrack }
                />
                { 
                    currentTrack
                    ? <MusicCard styleColor = { styleColor } currentTrack = { currentTrack } />
                    : <></>
                }
            </div>
            <Button 
                onClick = { toggelePlaylist } 
                variant="contained"
                color="secondary"
                sx = {{ mr:1}}
                // className = { stylesButton.button } 

            >
                <ListIcon fontSize="large" sx={{ color: grey[500] }}/>
            </Button>
        </div>
    )      
}

export default ControlPanel