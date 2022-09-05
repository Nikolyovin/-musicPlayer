
import '../../../App.css'
import { useEffect, useRef } from "react";

const VisualixerFunc = ({ audioRef, setContext }) => {
  const canvasRef = useRef(null)
  const  buttonRef = useRef(null)
  // const audioRef = useRef(null)
   
  const audioVisualizerLogic = () => {
    
    const context = new (window.AudioContext || window.webkitAudioContext)()
    setContext(context)

    const  audio = audioRef.current
    const  canvas = canvasRef.current
    const  muteButton = buttonRef.current

    
    // const mutePlay = () => {
    //   context.state === "running" ? context.suspend() : context.resume();
    //   audio.load()
    //   audio.play()
    //   console.log('context:', context.state)
    // }
    // muteButton.onclick = () => mutePlay();

    const analyser = context.createAnalyser();
    const ctx = canvas.getContext("2d");
    audio.crossOrigin = "anonymous";
    let audioSrc = context.createMediaElementSource(audio);
    audioSrc.connect(analyser);
    audioSrc.connect(context.destination);
    analyser.connect(context.destination);
    //config canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount,
      dataArray = new Uint8Array(bufferLength),
      WIDTH = canvas.width,
      HEIGHT = canvas.height,
      barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight = null,
      x = null;

    //core logic for the visualizer
    const timeouts = [];

    const renderFrame = () => {
      ctx.fillStyle = "rgba(0,0,0,0)";
      requestAnimationFrame(renderFrame);
      x = 0;
      analyser.getByteFrequencyData(dataArray);
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        //color based upon frequency
        barHeight = dataArray[i];
        let 
          r = barHeight + 22 * (i / bufferLength),
          g = 333 * (i / bufferLength),
          b = 47;
        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        x += barWidth + 1;
        
        //Allows visualizer to overlay on a background/video by clearing the rects after painting.
        let timer = setTimeout(() => {
          ctx.clearRect(0, 0, WIDTH, HEIGHT);
        }, 50);
        timeouts.push(timer);
      }
    };
    //Clears the accumulating timeouts.
    setTimeout(() => {
      for (let i = 0; i < timeouts.length; i++) {
        return clearTimeout(timeouts[i]);
      }
    }, 51);
    renderFrame();
  };

  // const doResume =() => {
  //   context.resume().then(console.log("resume started"));
  // }

  //connect audio visualizer to DOM and execute logic
  useEffect(() => {
    if (audioRef) audioVisualizerLogic();
  }, [audioRef]);
  
  return (
    <div className="VisualixerFunc">
      
      <button ref={buttonRef}> click </button>
      {/* <audio  
        className='audio'
        ref={audioRef} 
        controls 
      >
        <source 
          src='https://files.freemusicarchive.org/storage-freemusicarchive-org/music/MusOpen/Skidmore_College_Orchestra/Mussorgskys_Pictures_at_an_Exhibition/Skidmore_College_Orchestra_-_01_-_Promenade_Allegro_giusto_nel_modo_russico_senza_allegrezza_ma.mp3'
        >

        </source>
      </audio> */}

      <span className="hint">(Click page to start/stop)</span>
      <main className="main">
        <button className="contextButton">
          <canvas ref={canvasRef} className="canvas"></canvas>
        </button>
      </main>
    </div>
  );
}


// ReactDOM.render(<VisualixerFunc />, document.getElementById("root"));

export default VisualixerFunc