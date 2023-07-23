import React, { useState } from 'react';

import backgroundImage from '../images/dash1.jpg';

const styles = {
  main: {
    fontFamily: '"Dancing Script", cursive',
    color: 'white',
    backgroundImage: `url(${backgroundImage}), linear-gradient(to right, lightblue, purple)`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
    backgroundColor: 'darkpurple',
    color: 'white',
  },
  profilePic: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  courseList: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'darkpurple',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    
  },
  courseCard: {
    width: '100%',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'darkpurple',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#007BFF',
    color:'white',
  },
  continueButton: {
    padding: '10px 20px',
    border: '2px solid white',
    borderRadius: '3px',
    color: 'white',
    backgroundColor: '#007bff',
    cursor: 'pointer',
    marginRight: '10px',
  },
  unenrollButton: {
    padding: '10px 20px',
    border: '2px solid white',
    borderRadius: '3px',
    color: 'white',
    backgroundColor: '#dc3545',
    cursor: 'pointer',
  },
  progressBar: {
    width: '100%',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: '#e9ecef',
  },
  progress: {
    height: '100%',
    borderRadius: '10px',
    backgroundColor: '#007BFF',
  },
  recommendations: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'darkpurple',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    marginTop: '20px',
  },
  recommendationCard: {
    width: '100%',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'darkpurple',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
  },
};
const courses = [
  {
    title: 'Piano for Beginners',
    progress: 20,
  },
  {
    title: 'Intermediate Guitar',
    progress: 75,
  },
];

const recommendedCourses = [
  {
    title: 'Advanced Guitar Techniques',
    progress: 0,
  },
  {
    title: 'Jazz Improvisation',
    progress: 0,
  },
];

const UserDashboard = () => {
  const [myCourses, setMyCourses] = useState(courses);

  const handleUnenroll = (courseTitle) => {
    setMyCourses(prevCourses => prevCourses.filter(course => course.title !== courseTitle));
  };

  return (
    <main style={styles.main}>
      <h1>My Dashboard</h1>

      <section style={styles.userInfo}>
        <h2>Welcome, [User's Name]</h2>
        <p>You are currently enrolled in {myCourses.length} courses.</p>
      </section>

      <section style={styles.courseList}>
        {myCourses.map((course, index) => (
          <div key={index} style={styles.courseCard}>
            <h2 style={styles.courseTitle}>{course.title}</h2>

            <div style={styles.progressBar}>
              <div style={{...styles.progress, width: `${course.progress}%`}} />
            </div>

            <div>
              <button style={styles.continueButton}>Continue Learning</button>
              <button style={styles.unenrollButton} onClick={() => handleUnenroll(course.title)}>Unenroll</button>
            </div>
          </div>
        ))}
      </section>

      <section style={styles.recommendations}>
        <h2>Recommended for you</h2>

        {recommendedCourses.map((course, index) => (
          <div key={index} style={styles.recommendationCard}>
            <h2 style={styles.courseTitle}>{course.title}</h2>

            <div style={styles.progressBar}>
              <div style={{...styles.progress, width: `${course.progress}%`}} />
            </div>

            <div>
              <button style={styles.continueButton}>Start Learning</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default UserDashboard;