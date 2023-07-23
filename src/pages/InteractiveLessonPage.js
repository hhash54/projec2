import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ChatBox from '../components/ChatBox';
import LessonResources from '../components/LessonResources';

const styles = {
  main: {
    fontFamily: 'Rock Salt, Arial, sans-serif', // updated font
    color: '#333',
    backgroundImage: 'url("/path/to/your/music/background/image.jpg")', // updated background to a music-themed image
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '2.5em',
    color: '#007BFF', // updated title color to be more vibrant
  },
  videoPlayer: {
    flex: 2,
    marginRight: '20px',
    borderRadius: '15px',
    overflow: 'hidden',
  },
  sidebar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  chatBox: {
    flex: 1,
    borderRadius: '15px',
    overflow: 'hidden',
  },
  lessonResources: {
    flex: 1,
    borderRadius: '15px',
    overflow: 'hidden',
  },
};

function InteractiveLessonPage() {
  return (
    <main style={styles.main}>
      <div style={styles.videoPlayer}>
        <h1 style={styles.title}>Interactive Piano Lesson</h1>
        <VideoPlayer />
      </div>

      <div style={styles.sidebar}>
        <div style={styles.chatBox}>
          <ChatBox />
        </div>
        <div style={styles.lessonResources}>
          <LessonResources />
        </div>
      </div>

      {/* Footer can be added here */}
    </main>
  );
}

export default InteractiveLessonPage;
