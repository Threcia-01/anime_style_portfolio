import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import FloatingImage from "./selfImage";
import Navigation_Pannel from "./Navigation_Pannel";

export default function MainLayout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isStatus = location.pathname === "/status_window"
  const isGuild = location.pathname ==="/guild_card"

  return (
    <div className="relative overflow-hidden">
      <Navbar />

      {/* Home-only */}
      {isHome && <FloatingImage />}

      {/* ONE navigation panel, position controlled here */}
      <Navigation_Pannel 
        position= "right" 
        textColor={(isStatus||isGuild)?"black":"white"}
      />


      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
