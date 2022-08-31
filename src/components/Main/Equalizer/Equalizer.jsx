import styles from "./Equalizer.module.css"
import React, { useEffect, useRef } from 'react';

import AudioSpectrum from "react-audio-spectrum";

const Equalizer = () => {
    
    return (
        
        <div className = {styles.equalizerWrap}>
            <audio id="audio-element"
                src='https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_01_-_Promenade_Allegro_giusto_nel_modo_russico_senza_allegrezza_ma.mp3'
                autoPlay
                controls
                >
                </audio>
                <AudioSpectrum
                    id="audio-canvas"
                    height={200}
                    width={300}
                    audioId={'audio-element'}
                    capColor={'red'}
                    capHeight={2}
                    meterWidth={2}
                    meterCount={512}
                    meterColor={[
                        {stop: 0, color: '#f00'},
                        {stop: 0.5, color: '#0CD7FD'},
                        {stop: 1, color: 'red'}
                    ]}
                    gap={4}
                />
        </div>
    )
}

export default Equalizer