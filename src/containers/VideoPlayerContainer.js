import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
const mapStateToProps = (state) => {
  return {
    video: state.video,
    videos: state.videos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    video: (video) => dispatch(currentVideo(video))
  };
};
var VideoPlayerContainer = () => {
  return (<VideoPlayer />);
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerContainer);
