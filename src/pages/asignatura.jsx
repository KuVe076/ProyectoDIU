import React, { useState, useEffect } from 'react'
import Postulantes from '../components/postulantes'
import { useParams } from 'react-router-dom';
import horariob from '../assets/horariob.png';
import horariog from '../assets/horario_g.png';
import horarioe from '../assets/horario_e.png';
import resumenb from '../assets/resumenb.pdf';
import resumeng from '../assets/resumen_gonzalo.pdf';
import resumene from '../assets/resumen_e.pdf';

const Asignatura = () => {

    const { id } = useParams();

    const asignaturas = [
        { id: "1", codigo: "INF239", nombre: "Bases de datos", num_postulantes: 55, cupos: 7 ,postulantes: [
            {id: 1, nombre: "Benjamín Ignacio Aguilera Calvuen", nota: 79, pra:67, estado: "-", resumen: resumenb , horario: horariob},
            {id: 2, nombre: "Gonzalo Andrés Alarcón Carrasco", nota: 77, pra:70, estado: "-", resumen: resumeng, horario: horariog},
            {id: 3,nombre: "Esteban Eduardo Gárate García ", nota: 72, pra:71, estado: "-", resumen: resumene, horario: horarioe}, 
        ]
        },
        { id: "2", codigo: "INF236", nombre: "Análisis y diseño de software", num_postulantes: 78, cupos: 10, postulantes:[
          {id: 4,nombre: "Benjamín Ignacio Aguilera Calvuen", nota: 87, pra:67, estado: "-", resumen: resumenb, horario: horariob},
          {id: 5,nombre: "Gonzalo Andrés Alarcón Carrasco", nota: 77, pra:70, estado: "-", resumen: resumeng, horario: horariog},
          {id: 6,nombre: "Esteban Eduardo Gárate García ", nota: 71, pra:71, estado: "-", resumen: resumene,  horario: horarioe}, 
          
        ] },
        { id: "3", codigo: "INF225", nombre: "Ingeniería de software", num_postulantes: 60, cupos: 10, postulantes: [
            {id: 7,nombre: "Benjamín Ignacio Aguilera Calvuen", nota: 79, pra:67, estado: "-", resumen: resumenb, horario: horariob},
            {id: 8,nombre: "Gonzalo Andrés Alarcón Carrasco", nota: 74, pra:70, estado: "-", resumen: resumeng, horario: horariog},
            {id: 9,nombre: "Esteban Eduardo Gárate García ", nota: 81, pra:71, estado: "-", resumen: resumene,  horario: horarioe}, 
        ] },
    ];

    const asignatura = asignaturas.find(a => a.id === id);

    if (!asignatura) {
        return <div>Asignatura no encontrada</div>;
    }

    const [postulantes, setPostulantes] = useState(() => {
      const postulantesSave = localStorage.getItem(`postunates-${id}`);
      return postulantesSave ? JSON.parse(postulantesSave) : asignatura.postulantes;
    });

    useEffect(() => {
      localStorage.setItem(`postulantes-${id}`, JSON.stringify(postulantes));
    }, [postulantes, id]);

    const aceptarPostulante = (id) => {
      setPostulantes(prevPostulantes => 
        prevPostulantes.map(postulante => 
          postulante.id === id ? {...postulante, estado: 'Aceptado' } : postulante
        )
      );
    }


    return (
      <div className="app-container">
         <header className="header">
              <span> <b>Asignatura:</b> {asignatura.nombre}</span>
          </header>
          <div className='postulantes-container'>
            <h2>Postulantes</h2>
            <Postulantes postulantes={postulantes} onAccept={aceptarPostulante}></Postulantes>
          </div>
      </div>
    );
}

export default Asignatura