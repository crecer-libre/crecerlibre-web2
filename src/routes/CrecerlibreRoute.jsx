import { Route, Routes } from "react-router-dom"
import { HourPage } from "../pages/hour-page/HourPage"
import { AboutPage } from "../pages/about-page/AboutPage"
import { HourDetailPage } from "../pages/hour-page/HourDetailPage"
import { PortalPage } from "../pages/portal-page/PortalPage"
import { HistorialPage } from "../pages/historial-page/HistorialPage"

export const CrecerlibreRoute = () => {
  return (
    <Routes>
      {/* hour */}
      <Route path="" element={<HourPage />}/>
      <Route path="/nosotros" element={<AboutPage />}/>
      <Route path="/:id" element={<HourDetailPage />}/>
      <Route path="/portal" element={<PortalPage />}/>
      <Route path="/historial" element={<HistorialPage />}/>
    </Routes>
  )
}
