import styles from "./Songs.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { useDispatch } from "react-redux"
import { addLike, playtrack } from "../../../../redux/playerReducer"
import { useEffect, useRef, useState } from "react"
import { calculateTime } from "../../../../lib/helpers"
import MusicCard from "./MusicCard/MusicCard"

const Song = ({ currentTrack, setAudioRef }) => {
    const dispatch = useDispatch()
    const audioRef = useRef(null)
    const [ duration, setDuration ] = useState(0)
    const { track, isLike, id } = currentTrack
    
    const onLoadedMetadata = () => {
        setDuration(audioRef.current.duration) //делаем максимальное значение прогрессбара равное продолжительности трека
    }

    return (
        <>
            <audio                                      /* нужно чтобы достать duration */
                onLoadedMetadata = { onLoadedMetadata } 
                src = { track } 
                ref = { audioRef } 
            />           
            <div className = { styles.songWrap } id = {styles.sondWrapId} >
                    <MusicCard  
                        currentTrack = { currentTrack }
                        audioRef = { audioRef }
                        setAudioRef = { setAudioRef }
                        
                    />
                <div className = { styles.songOtherInfo } >
                    { 
                        isLike
                        ? <FavoriteIcon sx={{ color: grey[ 500 ] }} onClick = { () => dispatch(addLike(id)) }/>
                        : <FavoriteBorderIcon sx={{ color: grey[ 500 ] }} onClick = { () => dispatch(addLike(id)) }/>
                    }
                    <Typography variant="body2" color="#9e9e9e" component="div">
                        { calculateTime(duration) }
                    </Typography>
                </div>
            </div>
        </>
    )        
}

export default Song