import { useEffect, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import { useUserStore } from '../../store/userStore';
import { format } from 'date-fns';
import { studentHoursHistorial } from '../../helpers/hours';

export const HistorialPage = () => {
  const email = useUserStore((state) => state.email);
  const [hours, setHours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    studentHoursHistorial({ email })
      .then((h) => {
        console.log(h);
        setHours(h.data);
        setTotalPages(Math.ceil(h.data.length / itemsPerPage));
      })
      .catch((e) => setHours([]));

    return () => {
      setHours([]);
    };
  }, [email]);

  const itemsPerPage = 5;

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const newData = hours.slice(start, end);
    setDisplayedData(newData);
  }, [currentPage, hours]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='container mt-3'>
      <Table striped bordered hover className=''>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Profesional</th>
            <th>Fecha</th>
            <th>Estado</th>
            {/* Agrega más encabezados según tus datos */}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item, index) => (
            <tr key={index + 1}>
              <td>{item.student}</td>
              <td>{item.professional}</td>
              <td>{format(new Date(item.date), 'dd/MM/yyyy HH:mm')}</td>
              <td>{item.status}</td>
              {/* Agrega más celdas según tus datos */}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};
