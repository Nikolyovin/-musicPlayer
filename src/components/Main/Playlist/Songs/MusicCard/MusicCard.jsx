import { Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { playtrack } from "../../../../../redux/playerReducer"
import styles from "../Songs.module.css"

const MusicCard = ({ currentTrack, setAudioRef, audioRef, ...props }) => {
    // const dispatch = useDispatch()
    const { cover, name, id, band } = currentTrack
    // const onClickTrack = () => dispatch(playtrack(id)) 
    
    return (
        <div className = { props?.styleColor ? styles.MusicCardWrapFooter : styles.MusicCardWrap } >
            <img src = { cover } className = { styles.cover}/>
            <div className = { styles.text }>
                <Typography component="div" variant="body2" color="#fafafa">
                    { name }
                </Typography>
                <Typography variant="body2" color="#fafafa" component="div">
                    { band }
                </Typography>
            </div>
        </div>
    )
}

export default MusicCard