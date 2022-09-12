import styles from "./AudioPlayer.module.css"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { calculateTime } from "../../../lib/helpers"
import { Slider, Typography } from "@mui/material"
import ControlPanel from "./ControlPanel/ControlPanel"
import { togglePlayPauseAC } from "../../../redux/playerReducer"
import { useTheme } from '@mui/material/styles'

//www.w3schools.com html reference audio/video
const AudioPlayer = ({ context,  setAudioRef }) => {
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ duration, setDuration ] = useState(0)
    const [ currentTime, setCurrentTime ] = useState(0)

    const currentTrack = useSelector((state) => state.player.activeTrack) 
    const source = currentTrack?.track

    const audioPlayer = useRef()   // reference our audio component
    const progressBar = useRef()   // reference our progress bar
    const animationRef = useRef()  // reference the animation
    // const durationMui = audioPlayer.current.duration

    const theme = useTheme()

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

    const togglePlayPause = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        
        if (!prevValue) {
            context.resume()
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)                   //нужно чтобы прогресс бар двигался
        } else {
            context.suspend()
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
        console.log('currentTime:', currentTime)
    }
    
    return (
        <div className={styles.audioPlayer}>
         {/* <Slider
          aria-label="time-indicator"
          size="small"
          value={currentTime}
          min={0}
          step={1}
          max={duration}
          onChange={changeRange}
          ref = {progressBar} 
          onLoadedMetadata = { onLoadedMetadata }
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        /> */}
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