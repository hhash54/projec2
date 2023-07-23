import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // replace with actual video URL
        controls
        width="100%"
        height="100%"
      />
      <button>Previous Lesson</button>
      <button>Next Lesson</button>
    </div>
  );
}

export default VideoPlayer;