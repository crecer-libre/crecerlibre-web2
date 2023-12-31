import { useState } from 'react';
import { PortalProfessional } from "../portal-professional/PortalProfessional";
import { PortalHours } from "../portal-hours/PortalHours";
import { PortalStudent } from "../portal-student/PortalStudent";

export const PortalAdmin = () => {

    const [state, setState] = useState("profesionales");

    const handleItemClick = (e) => {
        console.log(e);
        setState(e)
    };

    return (
        <>
            <div className="dropdown mt-3">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menú
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => handleItemClick("profesionales")}>Profesionales</button></li>
                    <li><button className="dropdown-item" onClick={() => handleItemClick("estudiantes")}>Estudiantes</button></li>
                    <li><button className="dropdown-item" onClick={() => handleItemClick("horas")}>Horas</button></li>
                </ul>
            </div>

            {
                (state === "profesionales") &&
                <PortalProfessional />
            }
            {
                (state === "estudiantes") &&
                <PortalStudent />
            }
            {
                (state === "horas") &&
                <PortalHours />
            }

        </> 
    );
}
