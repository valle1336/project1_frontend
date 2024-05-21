import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


function RootLayout() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
  
  export default RootLayout;