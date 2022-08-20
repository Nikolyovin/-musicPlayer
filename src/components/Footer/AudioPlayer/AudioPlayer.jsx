import styles from "./AudioPlayer.module.css"
import track1 from "../../../assets/tracks/1.mp3"
import { useEffect, useRef, useState } from "react"

//www.w3schools.com html reference audio/video
const AudioPlayer = () => {
    const [isPlaying, setPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioPlayer = useRef()
    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds)                                             //j,y
    }, [ audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])   //useEffect сработатет запускаем как только аудиоплеер загрузиться и его методанные будут готовы
    
    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60)
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}` //если меньше 10 добовлять 0 впереди
        const seconds = Math.floor(secs % 60)
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${returnedMinutes} : ${returnedSeconds}`
    }

    const togglePlayPause = () =>{
        const prevValue = isPlaying
        setPlaying(!prevValue)
        if (!prevValue) {
            audioPlayer.current.play()
        } else {
            audioPlayer.current.pause()
        }
    }
     
    return (
            <div className={styles.audioPlayer}>
                <audio ref={audioPlayer} src={track1} type="audio/mp3" controls></audio>
                
                <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
                {/* current time */}
                <div>{calculateTime(currentTime)}</div>
                {/* progress bar */}
                <input type="range" defaultValue={0}/>
                {/* duration */}
                <div>{duration && !isNaN(duration) && calculateTime(duration)}</div> {/* убираем ошибку nan nan когда пытается отобразить, до того как загружается */}
            </div>
    )
}

export default AudioPlayer