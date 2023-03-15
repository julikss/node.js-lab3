import { Navigate, Route, Routes } from "react-router";
import ModeComponent from "./ModeComponent";
import AdminComponent from "./AdminComponent/AdminComponent";
import GuestComponent from "./GuestComponent";

const MainComponent = () => {
  return(
    <div>
      <Routes>
        <Route exact path="/auth" element={<ModeComponent/>}/>
        <Route exact path="/admin" element={<AdminComponent/>}/>
        <Route exact path="/guest" element={<GuestComponent/>}/>
        <Route path="*" element={<Navigate replace to="/auth"/>}/>
      </Routes>
    </div>
  )
}

export default MainComponent;