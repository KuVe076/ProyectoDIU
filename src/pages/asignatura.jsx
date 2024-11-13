import React, { useState, useEffect } from 'react'
import Postulantes from '../components/postulantes'
import { useParams } from 'react-router-dom';
import horariob from '../assets/horariob.png';
import horariog from '../assets/horario_g.png';
import horarioe from '../assets/horario_e.png';
import resumenb from '../assets/resumenb.pdf';
import resumeng from '../assets/resumen_gonzalo.pdf';
import resumene from '../assets/resumen_e.pdf';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import DescriptionIcon from '@mui/icons-material/Description';
import AyudantiasInfo from '../components/ayudantia_info';

const Asignatura = () => {

  const { id } = useParams();

  const asignaturas = [
    {
      id: "1", codigo: "INF239", nombre: "Bases de datos", num_postulantes: 3, cupos: 7, periodo: "2024-2", emplazamiento: "Santiago, San Joaquín", Departamento: "Informática", paralelo: 200, profesor: "Ricardo Salas Letelier", inicio: "05/08/2024", termino: "06/12/2024",
      postulantes: [
        { id: 1, nombre: "Benjamín Ignacio Aguilera Calvuen", nota: 79, pra: 67, estado: "Postulación Realizada", resumen: resumenb, horario: horariob, vtr: 1, carrera: "Ing Civil Informática" },
        { id: 2, nombre: "Gonzalo Andrés Alarcón Carrasco", nota: 77, pra: 70, estado: "Postulación Realizada", resumen: resumeng, horario: horariog, vtr: 1, carrera: "Ing Civil Informática" },
        { id: 3, nombre: "Esteban Eduardo Gárate García ", nota: 72, pra: 71, estado: "Postulación Realizada", resumen: resumene, horario: horarioe, vtr: 1, carrera: "Ing Civil Informática" },
      ]
    },
    {
      id: "2", codigo: "INF236", nombre: "Análisis y diseño de software", num_postulantes: 3, cupos: 10, periodo: "2024-2", emplazamiento: "Santiago, San Joaquín", Departamento: "Informática", paralelo: 200, profesor: "Ricardo Salas Letelier", inicio: "05/08/2024", termino: "06/12/2024", postulantes: [
        { id: 4, nombre: "Benjamín Ignacio Aguilera Calvuen", nota: 87, pra: 67, estado: "Postulación Realizada", resumen: resumenb, horario: horariob, vtr: 1, carrera: "Ing Civil Informática" },
        { id: 5, nombre: "Gonzalo Andrés Alarcón Carrasco", nota: 77, pra: 70, estado: "Postulación Realizada", resumen: resumeng, horario: horariog, vtr: 1, carrera: "Ing Civil Informática" },
        { id: 6, nombre: "Esteban Eduardo Gárate García ", nota: 71, pra: 71, estado: "Postulación Realizada", resumen: resumene, horario: horarioe, vtr: 1, carrera: "Ing Civil Informática" },

      ]
    },
    {
      id: "3", codigo: "INF225", nombre: "Ingeniería de software", num_postulantes: 3, cupos: 10, periodo: "2024-2", emplazamiento: "Santiago, San Joaquín", Departamento: "Informática", paralelo: 200, profesor: "Ricardo Salas Letelier", inicio: "05/08/2024", termino: "06/12/2024", postulantes: [
        { id: 7, nombre: "Benjamín Ignacio Aguilera Calvuen", nota: 79, pra: 67, estado: "Postulación Realizada", resumen: resumenb, horario: horariob, vtr: 1, carrera: "Ing Civil Informática" },
        { id: 8, nombre: "Gonzalo Andrés Alarcón Carrasco", nota: 74, pra: 70, estado: "Postulación Realizada", resumen: resumeng, horario: horariog, vtr: 1, carrera: "Ing Civil Informática" },
        { id: 9, nombre: "Esteban Eduardo Gárate García ", nota: 81, pra: 71, estado: "Postulación Realizada", resumen: resumene, horario: horarioe, vtr: 1, carrera: "Ing Civil Informática" },
      ]
    },
  ];

  const asignatura = asignaturas.find(a => a.id === id);

  if (!asignatura) {
    return <div>Asignatura no encontrada</div>;
  }

  const [postulantes, setPostulantes] = useState(() => {
    const postulantesSave = sessionStorage.getItem(`postulantes-${id}`);
    return postulantesSave ? JSON.parse(postulantesSave) : asignatura.postulantes;
  });

  useEffect(() => {
    sessionStorage.setItem(`postulantes-${id}`, JSON.stringify(postulantes));
  }, [postulantes, id]);

  const aceptarPostulante = (id) => {
    setPostulantes(prevPostulantes =>
      prevPostulantes.map(postulante =>
        postulante.id === id ? { ...postulante, estado: 'Aceptado' } : postulante
      )
    );
  }

  console.log(localStorage)

  return (
    <div className="app-container-asignatura">
      <header className="header">
        <AyudantiasInfo asignatura={asignatura} ></AyudantiasInfo>
      </header>
      <div className='postulantes-container'>
        <div className='postulantes'>
          <h2>Postulantes</h2>
          <Postulantes postulantes={postulantes} onAccept={aceptarPostulante}></Postulantes>
        </div>
      </div>
      {/* <div className='leyenda-container'>
        <div className='postulantes-leyenda'>
          <div className='legend-entry'><p>Para ver el resumen académico del postulante clickea  <DescriptionIcon className='leg-icon'/></p></div>
          <div className='legend-entry'><p>Para ver el horario del postulante clickea  <CalendarMonthIcon className='leg-icon'/></p></div>
          <div className='legend-entry'><p>Para aceptar un postulante clickea  <CheckIcon className='leg-icon'/></p></div>
        </div>
      </div> */}

      <div className='back-button'>
        <button onClick={() => window.location.href = '/'}>VOLVER</button>
      </div>
    </div>
  );
}

export default Asignatura