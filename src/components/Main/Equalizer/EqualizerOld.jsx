import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';
import styles from "./Equalizer.module.css"
import { useSelector } from "react-redux"
import React, { useEffect, useRef } from 'react';
import { AudioVisualizer, AudioVisualizerCommonProps } from 'react-audio-visualizers-core';
import { Loop } from '@mui/icons-material';



const Equalizer = () => {
    // const audioRef = useRef()
    // let  context, analyser, src, array, logo
    // // logo = document.getElementById("logo").style
    // const audio = document.getElementById("audio")
    // // const audio = audioRef.current
    // const onClickButton = () => {
    //     preparation()
    //     audioRef.play()
    // }

    // function preparation(){
    //     context = new AudioContext()
    //     analyser = context.createAnalyser()
    //     src = context.createMediaElementSource(audio)
    //     src.connect(analyser)
    //     analyser.connect(context.destination)
    //     loop()
    // }

    // function loop() {
    //     window.requestAnimationFrame(loop)
    //     array=new Uint8Array(analyser.frequencyBinCount)
    //     analyser.getByteFrequencyData(array)
    //     logo.minHeight = (array[40]) + "px"
    //     logo.width = (array[40]) + "px"
    // } 

    //////////////////////////////////////////////////
    const isOpenList = useSelector(state => state.player.isOpenList)
    const currentTrack = useSelector((state) => state.player.activeTrack?.track) 

    // useEffect(() => {
    //     createVisualization()
    // }, [])

    const createVisualization = () => {
        let context = new AudioContext();
        let analyser = context.createAnalyser();
        let canvas = useRef();
        let ctx = canvas.getContext('2d');

        const audio = useRef()
        audio.crossOrigin = "anonymous"

        let audioSrc = context.createMediaElementSource(audio);
        audioSrc.connect(analyser);
        audioSrc.connect(context.destination);
        analyser.connect(context.destination);
    
    createVisualization()

    const renderFrame = () => {
        let freqData = new Uint8Array(analyser.frequencyBinCount)
        requestAnimationFrame(renderFrame)
        analyser.getByteFrequencyData(freqData)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        console.log(freqData)
        ctx.fillStyle = '#9933ff';
        let bars = 100;
        for (var i = 0; i < bars; i++) {
            let bar_x = i * 3;
            let bar_width = 2;
            let bar_height = -(freqData[i] / 2);
            ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
        }
    }}

    renderFrame()
    
    return (
        
        <div className = { isOpenList ? styles.equalizerWrap : styles.equalizerWrapFull }>
            <audio 
                id = 'audio'
                autoPlay={true}
                controls={true}
                src= 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_01_-_Promenade_Allegro_giusto_nel_modo_russico_senza_allegrezza_ma.mp3'
                ref={audioRef}    
            />
            <canvas
                ref="canvas"
                id="analyzer"
            >
            </canvas>
        
            {/* <div id = {styles.logo}> */}

            {/* </div> */}
            <button onClick={onClickButton}> button </button>
        </div>
    )
}

export default Equalizer