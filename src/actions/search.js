import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { connect } from 'react-redux';
import store from '../store/store';
import _ from 'lodash';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return _.debounce((dispatch) => {
    (searchYouTube(
      {key: YOUTUBE_API_KEY, query: q},
      (data) => {
        dispatch(changeVideo(data[0]));
        dispatch(changeVideoList(data));
      }
    ))}, 200);
};
// searchYouTube({YOUTUBE_API_KEY, q, max: 5}, dispatch())
export default handleVideoSearch;