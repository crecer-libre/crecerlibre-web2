import { FormLog } from "../../components/forms/FormLog"
import { useUserStore } from "../../store/userStore"
import { PortalAdmin } from "./components/portal-admin/PortalAdmin";

export const PortalPage = () => {

  const state = useUserStore((state) => state);

  return (
    <>
      {
        (state.active === false) ?
          <div className="row">
            <div className="mt-3 col-6">
              <FormLog />
            </div>
            <div className="mt-3 col-6">
              <img src="logo.jpeg" alt="image" style={{ width: "100%" }} />
            </div>
          </div>
          : 
          <PortalAdmin />
      }

    </>
  )
}
