import React, { useState } from 'react';
import '../stylesheets/asignatura-show/postulantes.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function Postulantes({ postulantes, onAccept }) {

  const [sortOrder, setSortOrder] = useState({ column: null, direction: 'asc' }); // Estado inicial

  const handleSort = (column) => {
    if (sortOrder.column === column) {
      setSortOrder({ column, direction: sortOrder.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSortOrder({ column, direction: 'asc' });
    }
  };


  const sortedPostulantes = [...postulantes].sort((a, b) => {
    const column = sortOrder.column || 'nombre'; 
    const direction = sortOrder.direction || 'asc'; 

    const aValue = a[column];
    const bValue = b[column];

    if (aValue < bValue) {
        return direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
        return direction === 'asc' ? 1 : -1;
    }
    return 0;


  });

  return (
    <table className="postulantes-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Carrera</th>
          <th onClick={() => handleSort('nota')}>
            Nota del ramo 
            {sortOrder.column === 'nota' ? (sortOrder.direction === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />) : <ArrowDropDownIcon />}
          </th>
          <th>Promedio Rendimiento Acumulado </th>
          <th>Veces Tomadas el Ramo (VTR) </th>
          <th>Resumen</th>
          <th>Horario</th>
          <th>Aceptar</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {sortedPostulantes.map((postulante) => (
          <tr key={postulante.id}>
            <td>{postulante.nombre}</td>
            <td>{postulante.carrera}</td>
            <td>{postulante.nota}</td>
            <td>{postulante.pra}</td>
            <td>{postulante.vtr}</td>
            <td><a className='res-icon' href={postulante.resumen} target="_blank" rel="noopener noreferrer"><DescriptionIcon /></a></td>
            <td><a className='hor-icon' href={postulante.horario} target='_blank' rel='noreferrer'><CalendarMonthIcon /></a></td>
            <td className='check-tick'>
              <button onClick={() => onAccept(postulante.id)}><CheckIcon /></button></td>
            <td>{postulante.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Postulantes;