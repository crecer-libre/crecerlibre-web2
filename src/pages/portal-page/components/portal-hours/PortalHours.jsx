import { useEffect, useState } from "react";
import { getAllHours } from "../../../../helpers/hours";

export const PortalHours = () => {
  const [data, setData] = useState([]); // Tu conjunto de datos// Tu conjunto de datos
  const [filteredData, setFilteredData] = useState([]); // Datos filtrados
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Número de elementos por página

  useEffect(() => {
    getAllHours()
      .then((h) => {
        setData(h.data);
        setFilteredData(h.data);
      })
      .catch((e) => setData([]))
  }, []);

  // Función para manejar cambios en el input de filtro
  const handleFilterChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredResults = data.filter((item) => {
      return (
        item.student.toLowerCase().includes(searchTerm) ||
        item.professional.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredData(filteredResults);
  };

  // Calcula el índice del último elemento de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calcula el índice del primer elemento de la página actual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Obtiene los elementos de la página actual
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Cambia la página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const updateHourState = (value, id) => {
    console.log(value, id);
  }

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Filtrar por nombre o edad"
        onChange={handleFilterChange}
      />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Estudiante</th>
            <th>Profesional</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{item.student}</td>
              <td>{item.professional}</td>
              <td>{item.hour?.date}</td>
              <td>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {
                      (item.hour?.status === 'HORA_POR_CONFIRMAR') && 'Hora por confirmar' 
                    }
                    {
                      (item.hour?.status === 'HORA_RECHAZADA') && 'Hora rechazada' 
                    }
                    {
                      (item.hour?.status === 'HORA_CONFIRMADA') && 'Hora confirmada' 
                    }
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={() => updateHourState("HORA_CONFIRMADA", item.hour?.id)}>Confirmar hora</a></li>
                    <li><a className="dropdown-item" onClick={() => updateHourState("HORA_RECHAZADA", item.hour?.id)}>Rechazar hora</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Paginación */}
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

