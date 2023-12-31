import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useUserStore } from "../../store/userStore";
import { getHourById, scheduleHourApi } from "../../helpers/hours";
import { FormLogStd } from "../../components/forms/FormLogStd";
import { ToastComponent } from '../../components/toasts/ToastComponent';

export const HourDetailPage = () => {
  const { id } = useParams();
  const email = useUserStore((state) => state.email);
  const { active } = useUserStore((state) => state);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleShowToast = (message) => {
    setToastMessage(message);
    setShowToast(true);

    // Oculta el toast después de un tiempo (puedes ajustar el tiempo según tus necesidades)
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  useEffect(() => {
    getHourById(id)
      .then(h => {
        console.log(h);
      })
  }, [])

  const scheduleHour = () => {
    const obj = {
      idHour: id,
      email
    }

    scheduleHourApi(obj)
      .then((resp) => {
        console.log(resp);
        handleShowToast("Para concretar tu hora debes enviar el comprobante de pago, mientras tu hora quedará por confirmar.")
        setTimeout(() => {
          navigate('/', {state: {preventNavigate: true}})
        }, 5000)
      })
  }

  return (
    <>
      <div className="row mt-2">
        <div className="col-xxl col-md col-sm">
          <div className="card">
            <h5 className="card-header">Agendar hora</h5>
            <div className="card-body">
              {/* <h5 className="card-title">{hour.professionalName}</h5> */}
              {/* <p className="card-text"><strong>Fecha: </strong>{moment(hour.date).format('DD/MM/YYYY, h:mm:ss a')}</p> */}
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agendar
              </button>
            </div>
          </div>
        </div>
        <div className="col-xxl col-md col-sm">
          <div className="card">
            <h5 className="card-header">Información bancaria</h5>
            <div className="card-body">
              <h5 className="card-title">Banco</h5>
              <p className="card-text" style={{
                color: "grey"
              }}><strong>Banco del estado de Chile</strong></p>
              <h5 className="card-title">Tipo de cuenta</h5>
              <p className="card-text" style={{
                color: "grey"
              }}><strong>Cuenta corriente</strong></p>
              <h5 className="card-title">Número de cuenta</h5>
              <p className="card-text" style={{
                color: "grey"
              }}><strong>xxxxxxxxxxx</strong></p>
              <h5 className="card-title">Rut</h5>
              <p className="card-text" style={{
                color: "grey"
              }}><strong>xxxxxxxxxx-x</strong></p>

              <div className="alert alert-warning" role="alert">
                Luego de agendar tu hora, enviamos el comprobante de pago a nuestro correo.
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        (active === true)
        &&
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmación de hora</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Estas a punto de agendar una hora. ¿Deseas continuar?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={scheduleHour}>Si</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { console.log("dijo que no") }}>No</button>
              </div>
            </div>
          </div>
        </div>
      }

      {
        (active === false)
        &&
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <FormLogStd />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      }

      <ToastComponent
        showToast={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />

    </>
  )
}
