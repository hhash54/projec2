import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoList = [
    { title: 'Guitar Lesson', url: 'https://www.youtube.com/watch?v=example1' }, // Replace with actual URLs
    { title: 'Violin Lesson', url: 'https://www.youtube.com/watch?v=example2' },
    { title: 'Piano Lesson', url: 'https://www.youtube.com/watch?v=example3' },
  ];

  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : videoList.length - 1);
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <motion.h2 
        className="text-2xl font-bold mb-2 text-gray-200"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {videoList[currentVideoIndex].title}
      </motion.h2>
      <ReactPlayer
        url={videoList[currentVideoIndex].url}
        controls
        width="100%"
        height="100%"
      />
      <div className="mt-4 flex justify-between">
        <motion.button 
          onClick={handlePrevious} 
          className="bg-blue-500 text-white rounded-md px-4 py-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Previous Lesson
        </motion.button>
        <motion.button 
          onClick={handleNext} 
          className="bg-blue-500 text-white rounded-md px-4 py-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Next Lesson
        </motion.button>
      </div>
    </div>
  );
}

export default VideoPlayer;
