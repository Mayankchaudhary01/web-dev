import React from 'react';

const Teachers = () => {
  const teachers = [
    {
      name: 'Tannu Sharma',
      subject: 'Mathematics',
      bio: 'Experienced math teacher with 10+ years in education.',
      image: '/images/study.jpg'
    },
    {
      name: 'MayankChaudhary',
      subject: 'English',
      bio: 'Passionate English teacher specializing in literature and writing.',
      image: '/images/study.jpg'
    },
    {
      name: 'Amit Sharma',
      subject: 'Science',
      bio: 'Science enthusiast with a PhD in Physics, loves making learning fun.',
      image: '/images/study.jpg'
    }
  ];

  return (
    <section id="teachers" className="teachers">
      <div className="container">
        <h2>Our Teachers</h2>
        <div className="teachers-grid">
          {teachers.map((teacher, index) => (
            <div key={index} className="teacher-card">
              <img src={teacher.image} alt={teacher.name} className="teacher-image" />
              <h3>{teacher.name}</h3>
              <p className="subject">{teacher.subject}</p>
              <p className="bio">{teacher.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
