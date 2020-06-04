import React from 'react';
import './videoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item'>
      <img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.default.url} />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

//When user clicks on a video the onVideoSelect callback is invoked, sending information back up the app component

export default VideoItem;