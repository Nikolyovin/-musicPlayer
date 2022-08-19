import styles from "./Songs.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { useDispatch } from "react-redux"
import { addLike } from "../../../../redux/playerReducer"

const Song = ({ name, band, cover, duration, isLike, id }) => {
    const dispatch = useDispatch()
    return <div className = { styles.songWrap } >
        <div className = { styles.songInfo }>
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
        <div className = { styles.songOtherInfo } >
            { 
                isLike
                ? <FavoriteIcon sx={{ color: grey[500] }} onClick = { () => dispatch(addLike(id)) }/>
                : <FavoriteBorderIcon sx={{ color: grey[500] }} onClick = { () => dispatch(addLike(id)) }/>
            }
            <Typography variant="body2" color="#9e9e9e" component="div">
                { duration }
            </Typography>
        </div>
    </div>
            
}

export default Song