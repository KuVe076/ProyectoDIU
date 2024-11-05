import React from "react";
import '../stylesheets/asignatura-show/ayudantiainfo.scss';


function AyudantiasInfo({ asignatura }) {
    return (
        <div class='ayudantia-info'>
            <div className="info-title"><b>Detalle Ayudantia Asignatura</b></div>
            <div class='info-container'>
                <div className="column">
                    <div><b>Período :</b> {asignatura.periodo}</div>
                    <div><b>Emplazamiento :</b> {asignatura.emplazamiento}</div>
                    <div><b>Departamento :</b> {asignatura.Departamento}</div>
                </div>

                <div className="column">
                    <div><b>Asignatura :</b> {asignatura.codigo} - {asignatura.nombre}</div>
                    <div><b>Paralelo :</b> {asignatura.paralelo}</div>
                    <div><b>Profesor :</b> {asignatura.profesor}</div>
                </div>

                <div className="column">
                    <div><b>Cupos :</b> {asignatura.cupos}</div>
                    <div><b>Inicio :</b> {asignatura.inicio}</div>
                    <div><b>Término :</b> {asignatura.termino}</div>
                </div>
            </div>

        </div>
    );
};

export default AyudantiasInfo;
