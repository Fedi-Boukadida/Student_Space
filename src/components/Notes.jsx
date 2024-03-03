import React, { useState, useRef } from "react";
import "./Notes.css"; 
import arrowf from "../assets/paperplane.svg";

const Notes = () => {
  const [subjects] = useState([
    { id: 1, name: "Algorithms", ds: 18, examen: 17, tp_orale: 15 },
    { id: 2, name: "Data Structures", ds: 17, examen: 19, tp_orale: 16 },
    { id: 3, name: "Computer Networks", ds: 16, examen: 18, tp_orale: 14 },
    { id: 4, name: "Database Systems", ds: 18, examen: 20, tp_orale: 17 },
    { id: 5, name: "Operating Systems", ds: 19, examen: 18, tp_orale: 16 },
    { id: 6, name: "Software Engineering", ds: 16, examen: 17, tp_orale: 15 },
    { id: 7, name: "Artificial Intelligence", ds: 19, examen: 20, tp_orale: 18 },
    { id: 8, name: "Web Development", ds: 17, examen: 18, tp_orale: 16 },
  ]);

  const [selectedSubject, setSelectedSubject] = useState(null);
  const selectedSubjectRef = useRef(null);

  const handleSelectSubject = (subjectId) => {
    const selectedSubject = subjects.find((subject) => subject.id === subjectId);
    setSelectedSubject(selectedSubject);
    if (selectedSubjectRef.current) {
      selectedSubjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="notes-container">
      <h4 className="notes-title">
        <img src={arrowf} alt="Arrow" className="arrow-icon" /> 
        <span> </span>
        Liste des matières avec notes
      </h4>

      <ul className="notes-list">
        {subjects.map((subject) => (
          <li
            key={subject.id}
            onClick={() => handleSelectSubject(subject.id)}
            className="notes-list-item"
          >
            {subject.name}
          </li>
        ))}
      </ul>

      {selectedSubject && (
        <div ref={selectedSubjectRef} className="selected-subject">
          <h4>{selectedSubject.name}</h4>
          <p>DS: {selectedSubject.ds}</p>
          <p>Examen: {selectedSubject.examen}</p>
          <p>TP/Oral: {selectedSubject.tp_orale}</p>
        </div>
      )}
    </div>
  );
};

export default Notes;
