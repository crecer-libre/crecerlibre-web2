import { useEffect, useState } from "react"
import { ListItem } from "./components/list-item/ListItem"
import './style.scss';
import { FormLogReg } from "../../components/forms/FormLogReg";
import { getAvailableHours } from "../../helpers/hours";

export const HourPage = () => {

  const [hours, setHours] = useState([]);

  useEffect(() => {
    getAvailableHours()
      .then( h => {
        const { hours } = h.data;
        setHours(hours);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div
      className="row mt-2"
    >
      <FormLogReg />
      <div className="col list">
        {
          (hours.length === 0) ?
            <div className="alert alert-primary" role="alert">
              Actualmente no hay horas disponibles!
            </div>
            :
            hours.map(( h ) => (
              <ListItem
                key={ h.hour._id }
                {...h}
              />
            ))
        }
      </div>
      
    </div>
  )
}
