import React from 'react'
import Asignaturas from '../components/asignaturas';

export const HomePage = () => {
  const profesor = "Ricardo Salas Letelier";

  const asignaturas = [
    { id: "1", codigo: "INF239", nombre: "Bases de datos", num_postulantes: 3, cupos: 7, campus: "Santiago, San Joaquín" },
    { id: "2", codigo: "INF236", nombre: "Análisis y diseño de software", num_postulantes: 3, cupos: 10, campus: "Santiago, San Joaquín" },
    { id: "3", codigo: "INF225", nombre: "Ingeniería de software", num_postulantes: 3, cupos: 10, campus: "Santiago, San Joaquín" },
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
