import { Link } from 'react-router-dom'
import './style.scss'

export const ListItem = ({ professional, hour }) => {
    const formattedDate = new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date(hour.date));
      
      const correctedDate = formattedDate.replace(/(\d+)\/(\d+)\/(\d+), (\d+):(\d+)/, (match, day, month, year, hour, minute) => {
        // Restar 1 hora al valor de la hora
        const adjustedHour = (parseInt(hour, 10) - 1).toString().padStart(2, '0');
        return `${day}/${month}/${year} ${adjustedHour}:${minute}`;
      });
    return (
        <div
            key={professional._id}
            className="row list-item"
        >
            <div className="col-3">
                <span>Profesional</span>
                <p><strong>{professional.name}</strong></p>
            </div>
            <div className="col-9">
                <div className='hour-list-item-detail'>
                    <div>
                        <span>Fecha</span>
                        <p>{ correctedDate }</p>
                    </div>
                    <div>
                        <span>Estado</span>
                        <p>{hour.status === 'HORA_DISPONIBLE' && 'Hora disponible'}</p>
                    </div>  
                        <Link to={hour._id} 
                            style={{
                                outline: "none",
                                textDecoration: "none"
                            }}
                            className='detail-icon'
                        >
                            <span className="material-symbols-outlined"
                                style={{
                                    color: "#fff"
                                }}
                            >
                                event_available
                            </span>
                        </Link>  
                </div>
            </div>
        </div>
    )
}
