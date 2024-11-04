import React from 'react'
import Postulantes from '../components/postulantes'
import { useParams } from 'react-router-dom';
import horariob from '../assets/horariob.png';
import horariog from '../assets/horario_g.png';
import horarioe from '../assets/horario_e.png';


const Asignatura = () => {

    const { id } = useParams();

    const asignaturas = [
        { id: "1", codigo: "INF239", nombre: "Bases de datos", num_postulantes: 55, cupos: 7 ,postulantes: [
            {nombre: "Benjamín Ignacio Aguilera Calvuen", nota: 79, pra:67, estado: "-", resumen: './../assets/resumenb.pdf', horario: horariob},
            {nombre: "Gonzalo Andrés Alarcón Carrasco", nota: 77, pra:70, estado: "-", resumen: '', horario: horariog},
            {nombre: "Esteban Eduardo Gárate García ", nota: 72, pra:71, estado: "-", resumen: '', horario: horarioe}, 
        ]
        },
        { id: "2", codigo: "INF236", nombre: "Análisis y diseño de software", num_postulantes: 78, cupos: 10, postulantes:[
          {nombre: "Benjamín Ignacio Aguilera Calvuen", nota: 87, pra:67, estado: "-", resumen: '', horario: horariob},
          {nombre: "Gonzalo Andrés Alarcón Carrasco", nota: 77, pra:70, estado: "-", resumen: '', horario: horariog},
          {nombre: "Esteban Eduardo Gárate García ", nota: 71, pra:71, estado: "-", resumen: '',  horario: horarioe}, 
          
        ] },
        { id: "3", codigo: "INF225", nombre: "Ingeniería de software", num_postulantes: 60, cupos: 10, postulantes: [
            {nombre: "Benjamín Ignacio Aguilera Calvuen", nota: 79, pra:67, estado: "-", resumen: '', horario: horariob},
            {nombre: "Gonzalo Andrés Alarcón Carrasco", nota: 74, pra:70, estado: "-", resumen: '', horario: horariog},
            {nombre: "Esteban Eduardo Gárate García ", nota: 81, pra:71, estado: "-", resumen: '',  horario: horarioe}, 
        ] },
    ];

    const asignatura = asignaturas.find(a => a.id === id);

    if (!asignatura) {
        return <div>Asignatura no encontrada</div>;
      }


    return (
      <div className="app-container">
         <header className="header">
              <span> <b>Asignatura:</b> {asignatura.nombre}</span>
          </header>
          <div className='postulantes-container'>
            <h2>Postulantes</h2>
            <Postulantes postulantes={asignatura.postulantes}></Postulantes>
          </div>
      </div>
    );
}

export default Asignatura