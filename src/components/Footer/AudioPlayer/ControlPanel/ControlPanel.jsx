import MusicCard from "../../../Main/Player/Songs/MusicCard/MusicCard"
import Buttons from "./Buttons/Buttons"
import styles from "./ControlPanel.module.css"
import ListIcon from '@mui/icons-material/List'
import { grey } from "@mui/material/colors"
import stylesButton from "./Buttons/Buttons.module.css"
import { useDispatch } from "react-redux"
import { isOpenList } from "../../../../redux/playerReducer"

const ControlPanel = ({ togglePlayPause, isPlaying, currentTrack }) => {
    const dispatch = useDispatch()
    
    const toggelePlaylist = () => {
        dispatch(isOpenList())
    }

    return (
        <div className = { styles.controlPanel}>
            <div className = { styles.controlPanelLeft}>
                <Buttons togglePlayPause = { togglePlayPause } isPlaying = { isPlaying }/>
                { 
                    currentTrack
                    ? <MusicCard currentTrack = { currentTrack }/>
                    : <></>
                }
        </div>
            <div onClick = { toggelePlaylist } className = { stylesButton.button } >
                <ListIcon fontSize="large" sx={{ color: grey[500] }}/>
            </div>
        </div>
    )      
}

export default ControlPanel