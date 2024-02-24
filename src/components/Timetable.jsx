import React, { useState } from "react";
import "./Timetable.css"; 

function Timetable() {
  const [level, setLevel] = useState("");

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <div className="timetable-container">
      <div className="label-container">
        <label className="label">
          Choisir Groupe TD..
          <h6></h6>
          <select value={level} onChange={handleLevelChange}>
            <option value="">Choisir..</option>
            <option value="L1INFO">L1INFO</option>
            <option value="L2INFO">L2INFO</option>
            <option value="L3INFO">L3INFO</option>
          </select>
        </label>
      </div>

      {level && (
        <div>
          <h2 className="timetable-heading">Emploi du temps de {level}</h2>
          <object
            data={`/${level}.pdf`}
            type="application/pdf"
            width="800px"
            height="800px"
            style={{
              border: "1px solid #000", // Add border for clarity
            }}
          ></object>
        </div>
      )}
    </div>
  );
}

export default Timetable;
