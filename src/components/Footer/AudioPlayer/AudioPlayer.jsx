import styles from "./AudioPlayer.module.css"
import track1 from "../../../assets/tracks/1.mp3"
import { useEffect, useRef, useState } from "react"
import { Slider } from "@mui/material"

//www.w3schools.com html reference audio/video
const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)


    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation


    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;              //делаем максимальное значение прогрессбара равное продолжительности трека
    }

    // useEffect(() => {
    //     const seconds = Math.floor(audioPlayer.current.duration)
    //     setDuration(seconds)                                   
    //     progressBar.current.max = seconds                                         //делаем максимальное значение прогрессбара равное продолжительности трека
    // }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])   //useEffect сработатет запускаем как только аудиоплеер загрузиться и его методанные будут готовы
    
    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60)
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(secs % 60)
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${returnedMinutes}:${returnedSeconds}`
      }

    const togglePlayPause = () =>{
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        if (!prevValue) {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)                   //нужно чтобы прогресс бар двигался
        } else {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)                                  //нужно чтобы прогресс бар двигался
        }
    }


    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        changePlayerCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)                       //нужно чтобы прогресс бар двигался при каждом изменении
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value                         //делаем значение тега audio равным значение прогрессбара
        changePlayerCurrentTime()
    }

    

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
      }
    
    return (
            <div className={styles.audioPlayer}>
                <input type="range" defaultValue={0} ref = {progressBar} onChange={changeRange} className={styles.progressBar}/>
                <audio onLoadedMetadata={onLoadedMetadata} className={styles.audio} ref={audioPlayer} src={track1} type="audio/mp3" controls></audio>
                
                <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
                {/* current time */}
                <div>{calculateTime(currentTime)}</div>
                {/* progress bar */}
                

                {/* duration */}
                <div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div> {/* убираем ошибку nan nan когда пытается отобразить, до того как загружается */}
            </div>
    )
}

export default AudioPlayer