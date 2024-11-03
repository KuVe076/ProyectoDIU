import React from 'react'
import Asignaturas from '../components/asignaturas';

export const HomePage = () => {
  const profesor = "NOMBRE_APELLIDO_PROFESOR";

  const asignaturas = [
    { id: "1", codigo: "INF239", nombre: "Bases de datos", postulantes: 55, cupos: 7 },
    { id: "2", codigo: "INF236", nombre: "Análisis y diseño de software", postulantes: 78, cupos: 10 },
    { id: "3", codigo: "INF225", nombre: "Ingeniería de software", postulantes: 60, cupos: 10 },
  ];

  return (
    <div className="app-container">
       <header className="header">
            <span>{profesor}</span>
        </header>
      <div className="asignaturas-container">
        <h2>Asignaturas</h2>
        <Asignaturas asignaturas={asignaturas} />
      </div>
    </div>
  );
}


export default HomePage
