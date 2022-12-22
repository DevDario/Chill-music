import PropTypes from 'prop-types'
import musicNote from '../assets/music-icon.png'
import download from '../assets/download-white.png'
import replay from '../assets/replay-white.png'
import play from '../assets/play-white.png'

const MusicPlayer = ({image, alt, title, replayIcon, replayAlt, replayTitle, downloadIcon, downloadAlt, downloadTitle, playIcon, playAlt, playTitle}) =>{
    return(
        <div className="music-player">
            <div className="music-preview">
                <img src={image} alt={alt} title={title} />
            </div>
            <div className="music-info">
                <h4>Lofi Beats - 12 AM Studying Session</h4>
            </div>

            <div className="player-controls">
                <img className="replay-icon" src={replayIcon} alt={replayAlt} title={replayTitle}/>

                <div className="play-button">
                <img className="play-icon" src={playIcon} alt={playAlt} title={playTitle}/>
                </div>

                <img className="download-icon" src={downloadIcon} alt={downloadAlt} title={downloadTitle}/>
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
    playTitle: PropTypes.string.isRequired
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
    playIcon: play

}

export default MusicPlayer