import React from 'react';
import '../stylesheets/asignatura-show/postulantes.scss'
import ForwardIcon from '@mui/icons-material/Forward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import DescriptionIcon from '@mui/icons-material/Description';


function Postulantes({ postulantes }) {
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
            <td><DescriptionIcon/></td>
            <td><CalendarMonthIcon/></td>
            <td><CheckIcon/></td>
            <td>{postulante.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Postulantes;