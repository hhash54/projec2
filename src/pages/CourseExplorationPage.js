// src/pages/CourseExplorationPage.js
import React, { useState } from 'react';

const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',  // This can be replaced with a musical-themed background
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  search: {
    padding: '20px',
    width: '20%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: '#f1f3f4',
    borderRadius: '10px',
  },
  searchInput: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  courseList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '70%',
  },
  course: {
    width: '100%',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  courseInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-start',
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#007BFF',
  },
  mentorName: {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#6c757d',
  },
  seeMoreBtn: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    backgroundColor: '#007BFF',
    cursor: 'pointer',
  },
};

const courses = [
    {
      title: 'Piano for Beginners',
      description: 'A comprehensive course for those who are just starting their musical journey.',
      mentor: 'John Doe',
      thumbnail: '/path-to-thumbnail-1.jpg',
      courseOutline: 'This is the course outline...',
      mentorBio: 'This is the mentor bio...',
    },
    {
      title: 'Intermediate Guitar',
      description: 'Boost your guitar skills with advanced techniques and music theory.',
      mentor: 'Jane Doe',
      thumbnail: '/path-to-thumbnail-2.jpg',
      courseOutline: 'This is the course outline...',
      mentorBio: 'This is the mentor bio...',
    },
    // more course data...
  ];
  
  const CourseExplorationPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});
  
    const handleOpenPopup = (content) => {
      setPopupContent(content);
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <main style={styles.main}>
        <aside style={styles.search}>
          <input type="text" placeholder="Search courses..." style={styles.searchInput} />
          {/* Add faceted search options here */}
        </aside>
  
        <section style={styles.courseList}>
          {courses.map((course, index) => (
            <div key={index} style={styles.course}>
              <img src={course.thumbnail} alt={course.title} style={styles.courseImage} />
              <div style={styles.courseInfo}>
                <h2 style={styles.courseTitle}>{course.title}</h2>
                <p>{course.description}</p>
                <p style={styles.mentorName}>Mentor: {course.mentor}</p>
              </div>
              <button style={styles.seeMoreBtn} onClick={() => handleOpenPopup(course)}>See More</button>
            </div>
          ))}
        </section>
  
        {showPopup && (
          <div style={styles.popup}>
            <button style={styles.closeButton} onClick={handleClosePopup}>Close</button>
            <h2 style={styles.courseTitle}>{popupContent.title}</h2>
            <h3>Course Outline</h3>
            <p>{popupContent.courseOutline}</p>
            <h3>Mentor Bio</h3>
            <p>{popupContent.mentorBio}</p>
            <button style={styles.registerButton}>Register</button>
          </div>
        )}
      </main>
    );
  };
  
  export default CourseExplorationPage;