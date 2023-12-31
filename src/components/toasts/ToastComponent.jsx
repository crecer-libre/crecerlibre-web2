import { Toast } from "react-bootstrap";

export const ToastComponent = ({ showToast, message, onClose }) => {
  return (
    <Toast show={showToast} onClose={onClose}
    style={{ position: 'absolute', bottom: 10, right: 10 }}
    >
      <Toast.Header>
        <strong className="mr-auto">Hora por confirmar</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  )
}
