import styles from "./AudioPlayer.module.css"
import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { calculateTime } from "../../../lib/helpers"
import { Typography } from "@mui/material"
import AudioPlayerButtons from "./ControlPanel/Buttons/Buttons"
import ControlPanel from "./ControlPanel/ControlPanel"
import { togglePlayPauseAC } from "../../../redux/playerReducer"

//www.w3schools.com html reference audio/video
const AudioPlayer = ({ context,  setAudioRef }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const currentTrack = useSelector((state) => state.player.activeTrack) 
    const source = currentTrack?.track

    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    const dispatch = useDispatch()

    // const context = new (window.AudioContext || window.webkitAudioContext)() // контекст для визуализатора завука

    useEffect(() => {    
        setIsPlaying(false)
        // audioPlayer.current?.pause()
        audioPlayer.current?.load()
        setAudioRef(audioPlayer)
        // audioPlayer.current?.play()
    }, [currentTrack]);

    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds);
        progressBar.current.max = seconds;              //делаем максимальное значение прогрессбара равное продолжительности трека
    }

    const togglePlayPause = () =>{
        // console.log('context1:', context.state)
        // context.state === "running" ? context.suspend() : context.resume()
        // setContext(context)
        // console.log('context2:', context.state)
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        dispatch(togglePlayPauseAC())
        
        if (!prevValue) {
            console.log('context1:', context.state)
            context.resume()
            // setContext(context)
            console.log('context2:', context.state)
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)                   //нужно чтобы прогресс бар двигался
        } else {
            console.log('context1:', context.state)
            context.suspend()
            // setContext(context)
            console.log('context2:', context.state)
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
                onLoadedMetadata={onLoadedMetadata} 
                className={styles.audio} 
                ref={audioPlayer} 
                src={source} 
                type="audio/mpeg" 
                controls 
            />
            <ControlPanel 
                togglePlayPause = { togglePlayPause } 
                isPlaying = { isPlaying }
                currentTrack = { currentTrack }
                audioPlayer = { audioPlayer }
                setIsPlaying = { setIsPlaying }
            />
            <Typography variant="body2" color="#fafafa" component="div">
                <div className = { styles.currentTime }>
                    { calculateTime(currentTime) }
                </div>
            </Typography>
            <Typography variant="body2" color="#fafafa" component="div">
                <div className = { styles.duration }>
                    { (duration && !isNaN(duration)) && calculateTime(duration) } {/* убираем ошибку nan nan когда пытается отобразить, до того как загружается */}
                </div> 
            </Typography>
        </div>
    )
}

export default AudioPlayer