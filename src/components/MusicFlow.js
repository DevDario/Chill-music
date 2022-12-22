import PropTypes from 'prop-types'

const MusicFlow = ({color, width}) =>{

    const MusicFlowStyle = {
        backgroundColor: color,
        width: width
    }

    return(
        <div className="music-flow" style={MusicFlowStyle}>
        </div>
    );
}

MusicFlow.propTypes = {
    width: PropTypes.string,
    color: PropTypes.string.isRequired
}

MusicFlow.defaultProps = {
    width: "120px",
    color: "#ffffff"
}

export default MusicFlow