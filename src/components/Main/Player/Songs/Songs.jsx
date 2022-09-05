import Song from "./Song"
import { useDispatch } from "react-redux"
import styles from "./Songs.module.css"
import { addLike } from "../../../../redux/playerReducer"

const Songs = ({ songs, setAudioRef }) => {  
    return (
        <> 
            { songs.map(item => 
                <Song  key = { item.id } currentTrack = { item } setAudioRef = { setAudioRef }/>
            )}
        </>
    )
    
}
export default Songs