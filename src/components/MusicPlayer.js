import PropTypes from 'prop-types'
import  '../App.scss'
import musicNote from '../assets/music-icon.png'
import download from '../assets/download-white.png'
import replay from '../assets/replay-white.png'
import play from '../assets/play-white.png'
import pause from '../assets/pause-white.png'
//dark icons
import downloadDark from '../assets/download-dark.png'
import replayDark from '../assets/replay-dark.png'
import pauseDark from '../assets/pause-dark.png'
import playDark from '../assets/play-dark.png'
//music
import myAudio from '../assets/music/music.mp3'
// the object that contains the music
const audio = new Audio (myAudio)

const MusicPlayer = ({image, alt, title, replayIcon, replayAlt, replayTitle, downloadIcon, downloadAlt, downloadTitle, playIcon, playAlt, playTitle}) =>{

    const playAudio = () =>{
        const playButton = document.getElementById('play')
        const playDarkButton = document.getElementById('playDark')
        const pauseButton = document.getElementById('pause')
        const pauseDarkButton = document.getElementById('pauseDark')
        let currentTheme = sessionStorage.getItem('theme')

        if(currentTheme==="dark"){
            playButton.style.display="none"
            playDarkButton.style.display="none"
            pauseButton.style.display="flex"
        }else{
            if(currentTheme==="light")
                playDarkButton.style.display="none"
                pauseDarkButton.style.display="flex"
        }

        audio.play()
    }

    const replayAudio = () =>{
        const playButton = document.getElementById('play')
        const playDarkButton = document.getElementById('playDark')
        const pauseButton = document.getElementById('pause')
        const pauseDarkButton = document.getElementById('pauseDark')
        let currentTheme = sessionStorage.getItem("theme")

        if(currentTheme==="dark"){
            playButton.style.display="none"
            //playDarkButton.style.display="none"
            pauseButton.style.display="flex"
        }else{
            if(currentTheme==="light")
                playDarkButton.style.display="none"
                pauseDarkButton.style.display="flex"
        }

        audio.currentTime=0
        audio.play()
}

    const pauseAudio = () =>{
        const playButton = document.getElementById('play')
        const playDarkButton = document.getElementById('playDark')
        const pauseButton = document.getElementById('pause')
        const pauseDarkButton = document.getElementById('pauseDark')
        const currentTheme = sessionStorage.getItem("theme")

        if(currentTheme==="dark"){
            pauseButton.style.display="none"
            playButton.style.display="flex"
        }else{
            if(currentTheme==="light"){
                pauseDarkButton.style.display="none"
                playDarkButton.style.display="flex"
            }
        }

        audio.pause()
    }

    return(
        <div className="music-player" id="music-player">
            <div className="music-preview">
                <img src={image} alt={alt} title={title} />
                <audio id="music" src={myAudio}></audio>
            </div>
            <div className="music-info">
                <h4 id="music-title">Lofi Beats - 12 AM Studying Session</h4>
            </div>

            <div className="player-controls">
                <img id="repeat" className="replay-icon" onClick={replayAudio} src={replayIcon} alt={replayAlt} title={replayTitle}/>
                <img id="repeatDark" className="replay-icon" onClick={replayAudio} src={replayDark} alt={replayAlt} title={replayTitle}/>

                <div className="play-button">
                <img id="play" className="play-icon" onClick={playAudio} src={playIcon} alt={playAlt} title={playTitle}/>
                <img id="playDark" className="play-icon" onClick={playAudio} src={playDark} alt={playAlt} title={playTitle}/>
                <img id="pauseDark" className="pause-icon" onClick={pauseAudio} src={pauseDark} alt={playAlt} title={playTitle}/>
                <img id="pause" className="pause-icon" onClick={pauseAudio} src={pause} alt={playAlt} title={playTitle}/>
                </div>

                <img id="download" className="download-icon" src={downloadIcon} alt={downloadAlt} title={downloadTitle}/>
                <img id="downloadDark" className="download-icon" src={downloadDark} alt={downloadAlt} title={downloadTitle}/>
            </div>
        </div>
    )
}

MusicPlayer.propTypes = {
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    replayAlt: PropTypes.string.isRequired,
    replayTitle: PropTypes.string.isRequired,
    downloadAlt: PropTypes.string.isRequired,
    downloadTitle: PropTypes.string.isRequired,
    playAlt: PropTypes.string.isRequired,
    playTitle: PropTypes.string.isRequired,
    pauseAlt: PropTypes.string.isRequired,
    pauseTitle: PropTypes.string.isRequired
}

MusicPlayer.defaultProps = {
    alt: "Music Preview",
    title: "Music Preview",
    image: musicNote,
    replayAlt: "Restart Music",
    replayTitle: "Restart Music",
    downloadAlt: "Download Music",
    downloadTitle: "Download Music",
    downloadIcon: download,
    replayIcon: replay,
    playAlt:"Play Music" ,
    playTitle:"Play Music",
    playIcon: play,
    pauseAlt: "Pause Music",
    pauseTitle: "Pause Music"

}

export default MusicPlayer