import styles from "./Footer.module.css"
import ProgressBar from "./ProgressBar/ProgressBar";
import track1 from "../../assets/tracks/1.mp3"
import track2 from "../../assets/tracks/2.mp3"
import track3 from "../../assets/tracks/3.mp3"
import track4 from "../../assets/tracks/4.mp3"
import track5 from "../../assets/tracks/5.mp3"
import track6 from "../../assets/tracks/6.mp3"
import track7 from "../../assets/tracks/7.mp3"
import track8 from "../../assets/tracks/8.mp3"
import track9 from "../../assets/tracks/9.mp3"
import track10 from "../../assets/tracks/10.mp3"
import { useSelector } from "react-redux";
import AudioPlayer from "./AudioPlayer/AudioPlayer";

const Footer = () => {
    const track = useSelector((state) => state.player.activeTrack) 
    const arr = [track1, track2, track3, track4, track5, track6, track7, track8, track9, track10]
    // const currentTrack = arr.find(item => item == track)
    // console.log('currentTrack:', currentTrack)
    // console.log('track:', track)
    // useEffect(() => {
    //     dispatch(setSongs())
    // }, [])

    return (
        <div>
            {/* <ProgressBar track={track}/> */}
            <AudioPlayer/>
        </div>
    )
}

export default Footer