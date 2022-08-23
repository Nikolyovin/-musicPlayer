import { Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { playtrack } from "../../../../../redux/playerReducer"
import styles from "../Songs.module.css"

const MusicCard = ({currentTrack}) => {
    const dispatch = useDispatch()
    console.log('currentTrack:', currentTrack)
    

    return (
            
        <div className = { styles.songInfo } onClick = { () => dispatch(playtrack(currentTrack?.id)) }>
            <img src = { currentTrack?.cover } className = { styles.cover}/>
            <div className = { styles.text }>
                <Typography component="div" variant="body2" color="#fafafa">
                    { currentTrack?.name }
                </Typography>
                <Typography variant="body2" color="#9e9e9e" component="div">
                    { currentTrack?.band }
                </Typography>
            </div>
        </div>
    )
}

export default MusicCard