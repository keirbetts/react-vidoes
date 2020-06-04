import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const mappedVideos = videos.map(video => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
  })

  //onVideoSelect is passed down on props to the videoItem

  return (
    <div className='ui relaxed divided list'>
      {mappedVideos}

    </div>
  );
};

export default VideoList;