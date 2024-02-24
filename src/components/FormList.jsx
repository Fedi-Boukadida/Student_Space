import React, { useState } from "react";
import arrowf from "../assets/paperplane.svg";
import "./FormList.css"; // Importing CSS file for styling

const FormList = ({ onSelectForm }) => {
  const [forms] = useState([
    {
      id: 1,
      name: "DEMANDE MUTATION DES GROUPES - PRÉPARATOIRE",
      translation: "مطلب مناقلة بين الأفواج - خاص بالمرحلة التحضيرية",
    },
    {
      id: 2,
      name: "DEMANDE MUTATION DES GROUPES - POUR LICENCE",
      translation: "مطلب مناقلة بين الأفواج - خاص بمرحلة الإجازة",
    },
    {
      id: 3,
      name: "DEMANDE ATTESTATION SORTIE",
      translation: "مطلب الحصول على شهادة مغادرة",
    },
    {
      id: 4,
      name: "DEMANDE ATTESTATION PRÉSENCE",
      translation: "مطلب الحصول على شهادة حضور",
    },
    {
      id: 5,
      name: "DEMANDE DUPLICATA",
      translation: "مطلب الحصول على نظير وثيقة",
    },
    {
      id: 6,
      name: "DEMANDE CORRECTION DOCUMENT ADMINISTRATIF",
      translation: "مطلب إصلاح وثيقة إداريّة",
    },
    {
      id: 7,
      name: "DEMANDE RELEVÉ NOTE - PAR RANG",
      translation: "مطلب استخراج كشف أعداد بالرتبة",
    },
    {
      id: 8,
      name: "DEMANDE RELEVÉ NOTE - S1",
      translation: "مطلب كشف أعداد السداسي الأول",
    },
    {
      id: 9,
      name: "DEMANDE CURSUS UNIVERSITAIRE",
      translation: "مطلب سيرة جامعية",
    },
    {
      id: 10,
      name: "DEMANDE CRÉATION CLUB",
      translation: "مطلب بعث نادي طلّابي",
    },
    { id: 11, name: "DEMANDE DIPLÔME", translation: "طلب شهادة تخرّج" },
  ]);

  const handleSelectForm = (formId) => {
    const selectedForm = forms.find((form) => form.id === formId);
    return (
      <div className="selected-form">
        {selectedForm.name} - {selectedForm.translation}
      </div>
    );
  };

  return (
    <div className="form-list-container">
      <h4 className="form-list-title">
        <img src={arrowf} alt="Arrow" className="arrow-icon" /> Liste des
        formulaires en ligne
      </h4>

      <ul className="form-list">
        {forms.map((form) => (
          <li
            key={form.id}
            onClick={() => handleSelectForm(form.id)}
            className="form-list-item"
          >
            {form.name} - {form.translation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
