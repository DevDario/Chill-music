import PropTypes from 'prop-types'

const MusicFlow = ({color, width,height}) =>{

    const MusicFlowStyle = {
        backgroundColor: color,
        width: width,
        height: height,
        borderRadius: "100px",
        border:".60px solid #454545",
        boxShadow: "2px 2px rgba(8, 8, 8, 0.192)"
    }

    return(
        <div className="music-flow" style={MusicFlowStyle}>
        </div>
    );
}

MusicFlow.propTypes = {
    width: PropTypes.string,
    color: PropTypes.string.isRequired,
    height: PropTypes.string
}

MusicFlow.defaultProps = {
    width: "340px",
    color: "#ffffff",
    height: "24px"
}

export default MusicFlow