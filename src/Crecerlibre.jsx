import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/ui/navbar/Navbar';
import { CrecerlibreRoute } from './routes/CrecerlibreRoute';

export const Crecerlibre = () => {
  return (
    <>
        <Navbar />
        <div className='container '>
          <CrecerlibreRoute />
        </div>
    </>
  );
};
