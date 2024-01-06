import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import { useUserStore } from '../../../store/userStore';
import { useState } from 'react';

export const Navbar = () => {

  const state = useUserStore((state) => state);
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">Crecer Libre WEB 2</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="">Horas</Link>
            </li>
            {
              (state.role === 'STUDENT_ROLE') &&
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/historial">Historial</Link>
              </li>

            }
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/nosotros">Nosotros</Link>
            </li>
            {
              (state.role !== 'STUDENT_ROLE') &&
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/portal">Portal Profesionales</Link>
              </li>
            }
            <p className=''
              onClick={() => {
                state.setToken("");
                state.setUsername("");
                state.setEmail("");
                state.setActive(false);
                state.setRole("");
                
                navigate("");
              }}
              style={{
                fontSize: "14px",
                paddingRight: "15px",
                width: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer", // Color de fondo inicial
                color: hover ? 'red' : 'white'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >{(state.username || "") || (state.email || "")}</p>

          </ul>
        </div>
      </div>
    </nav>
  );
};
