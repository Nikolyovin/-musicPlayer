import Song from "./Song"
import { useDispatch } from "react-redux"
import styles from "./Songs.module.css"
import { addLike } from "../../../../redux/playerReducer"

const Songs = ({ songs }) => {  
    
    
    return <> 
        { songs.map(item => <Song 
            // id = { item.id } 
            key = { item.id } 
            // name = { item.name } 
            // band = { item.band } 
            // duration = { item.duration }
            // cover = { item.cover }
            // isLike = { item.isLike }
            // track = {item.track}
            currentTrack = { item }
            // props = {...item}
        />)}
    </>
    
}
export default Songs