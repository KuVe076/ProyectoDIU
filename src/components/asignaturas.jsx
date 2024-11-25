import React from "react";
import "../stylesheets/homepage/asignaturas.scss";
import ForwardIcon from "@mui/icons-material/Forward";
import { Link } from 'react-router-dom';

function Asignaturas({ asignaturas }) {
  return (
    <table className="asignaturas-table">
      <thead>
        <tr>
          <th>Código Asignatura</th>
          <th>Nombre Asignatura</th>
          <th>Emplazamiento</th>
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
            <td>{asignatura.campus}</td>
            <td>{asignatura.num_postulantes}</td>
            <td>{asignatura.cupos}</td>
            <td>
              <Link to={`/asignatura/${asignatura.id}`}>
                <span className="arrow">
                  <ForwardIcon />
                </span>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Asignaturas;
