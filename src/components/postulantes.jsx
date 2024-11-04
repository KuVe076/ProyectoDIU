import React from 'react';
import '../stylesheets/asignatura-show/postulantes.scss'
import ForwardIcon from '@mui/icons-material/Forward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import DescriptionIcon from '@mui/icons-material/Description';
// import resumenb from '../assets/resumenb.pdf';
import horariob from '../assets/horariob.png';


function Postulantes({ postulantes, onAccept }) {
  return (
    <table className="postulantes-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Nota del ramo</th>
          <th>Promedio Rendimiento Acumulado </th>
          <th>Resumen</th>
          <th>Horario</th>
          <th>Aceptar</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {postulantes.map((postulante) => (
          <tr key={postulante.id}>
            <td>{postulante.nombre}</td>
            <td>{postulante.nota}</td>
            <td>{postulante.pra}</td>
            <td><a className='res-icon' href={postulante.resumen} target="_blank" rel="noopener noreferrer"><DescriptionIcon/></a></td>
            <td><a className='hor-icon' href={postulante.horario} target='_blank' rel='noreferrer'><CalendarMonthIcon/></a></td>
            <td className='check-tick'>
              <button onClick={() => onAccept(postulante.id)}><CheckIcon/></button></td> 
            <td>{postulante.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Postulantes;