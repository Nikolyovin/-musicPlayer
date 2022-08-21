import styles from "./AudioPlayer.module.css"
import track1 from "../../../assets/tracks/1.mp3"
import track2 from "../../../assets/tracks/1.mp3"
import { useEffect, useRef, useState } from "react"
import { Slider } from "@mui/material"
import { useSelector } from "react-redux"

//https://developer.chrome.com/blog/play-request-was-interrupted/
//www.w3schools.com html reference audio/video
const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    // const [source, setSource] = useState(track1)

    const track = useSelector((state) => state.player.activeTrack?.track) 
    console.log('track:', track)
    

    // const trackUrl = "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3";
    // const trackUrl2 ="https://cdn.simplecast.com/audio/cae7b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3";
    // const arr = [track1, track2]
    // const currentTrack = arr.find(item => item == track)

    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {    
        audioPlayer.current?.pause()
        audioPlayer.current?.load();
        // audioPlayer.current?.play()
        console.log('audioPlayer.current:', audioPlayer.current)
      }, [track]);
    
    //   src/assets/tracks/1.mp3

    //динамическое изменение песни
    // useEffect(() => {
    //     console.log('source1:', source)
    //     setSource(currentTrack?.track)
    //     console.log('source2:', source)
    //         if(audioPlayer.current){
    //             console.log('source3:', source)
    //             audioPlayer.current.pause();
    //             audioPlayer.current.load();
    //             audioPlayer.current.play();
    //         }
        
    // }, [currentTrack])


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
                <audio preload="auto" autoplay onLoadedMetadata={onLoadedMetadata} className={styles.audio} ref={audioPlayer} src={track} type="audio/mpeg" controls></audio>
                <audio src = 'https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3' controls></audio>
                {/* <img src = './Screen Shot 2019-04-25 at 18.33.48.png'></img> */}
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