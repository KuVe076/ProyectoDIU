import React from 'react';
import '../stylesheets/homepage/asignaturas.scss'
import ForwardIcon from '@mui/icons-material/Forward';


function Asignaturas({ asignaturas }) {
  return (
    <table className="asignaturas-table">
      <thead>
        <tr>
          <th>Código Asignatura</th>
          <th>Nombre</th>
          <th>Cantidad de postulantes</th>
          <th>Cupos disponibles</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {asignaturas.map((asignatura) => (
          <tr key={asignatura.codigo}>
            <td>{asignatura.codigo}</td>
            <td>{asignatura.nombre}</td>
            <td>{asignatura.postulantes}</td>
            <td>{asignatura.cupos}</td>
            <td><span className="arrow"><ForwardIcon/></span></td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Asignaturas;