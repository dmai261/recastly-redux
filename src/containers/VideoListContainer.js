import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStateToProps = (state) => {
  return {
    currentVideo: state.currentVideo,
    videoList: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: () => dispatch(changeVideo)
  };
};
var VideoListContainer = () => {
  return (<VideoList />);
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
