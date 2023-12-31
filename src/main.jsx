import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Crecerlibre } from './Crecerlibre'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Crecerlibre />
  </BrowserRouter>
)
