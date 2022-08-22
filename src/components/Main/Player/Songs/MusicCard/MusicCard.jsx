import { Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { playtrack } from "../../../../../redux/playerReducer"
import styles from "../Songs.module.css"

const MusicCard = ({ name, cover, band, id }) => {
    const dispatch = useDispatch()

    return (
            
        <div className = { styles.songInfo } onClick = { () => dispatch(playtrack(id)) }>
            <img src = { cover } className = { styles.cover}/>
            <div className = { styles.text }>
                <Typography component="div" variant="body2" color="#fafafa">
                    { name }
                </Typography>
                <Typography variant="body2" color="#9e9e9e" component="div">
                    { band }
                </Typography>
            </div>
        </div>
    )
}

export default MusicCard