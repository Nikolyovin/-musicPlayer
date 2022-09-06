import Song from "./Song"

const Songs = ({ songs, setAudioRef }) => { 
     
    return (
        <> 
            { songs.map(item => 
                <Song  
                    key = { item.id } 
                    currentTrack = { item } 
                    setAudioRef = { setAudioRef }
                />
            )}
        </>
    )
}

export default Songs