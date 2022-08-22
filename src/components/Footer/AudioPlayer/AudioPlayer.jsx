import styles from "./AudioPlayer.module.css"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { calculateTime } from "../../../lib/helpers"
import MusicCard from "../../Main/Player/Songs/MusicCard/MusicCard"

//www.w3schools.com html reference audio/video
const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const track = useSelector((state) => state.player.activeTrack) 
    const source = track?.track
    // const {name, band, id, cover} = track

    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {    
        setIsPlaying(false)
        // audioPlayer.current?.pause()
        audioPlayer.current?.load()
        // audioPlayer.current?.play()
      }, [track]);

    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;              //делаем максимальное значение прогрессбара равное продолжительности трека
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
            <input 
                type="range" 
                defaultValue={0} 
                ref = {progressBar} 
                onChange={changeRange} 
                className={styles.progressBar}
            />
            <audio 
                preload="auto" 
                autoplay 
                onLoadedMetadata={onLoadedMetadata} 
                className={styles.audio} 
                ref={audioPlayer} 
                src={source} 
                type="audio/mpeg" 
                controls 
            />
            <button onClick={togglePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <MusicCard 
                track = {track}
            />
            <div>
                {calculateTime(currentTime)}
            </div>
            <div>
                {(duration && !isNaN(duration)) && calculateTime(duration)} {/* убираем ошибку nan nan когда пытается отобразить, до того как загружается */}
            </div> 
        </div>
    )
}

export default AudioPlayer