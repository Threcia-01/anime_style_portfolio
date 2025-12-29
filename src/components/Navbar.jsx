// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import logo from "../assets/DeepanshuLogo.png";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50  ">
      <div className="flex items-center gap-6 px-8 py-4 text-white  ">
        
        <Link to="/" className="shrink-0">
          <img
            src={logo}
            alt="Deepanshu Logo"
            className="h-9 w-auto cursor-pointer"
          />
        </Link>

        <Link to="/origins" className="hover:text-indigo-300 transition">
          Origins
        </Link>

        <Link to="/dungens_cleared" className="hover:text-indigo-300 transition">
          Dungeons Cleared
        </Link>

        <Link to="/inventory" className="hover:text-indigo-300 transition">
          Inventory
        </Link>

        <Link to="/rank_and_trials" className="hover:text-indigo-300 transition">
          Rank & Trials
        </Link>

        <Link to="/status_window" className="hover:text-indigo-300 transition">
          Status Window
        </Link>

        <Link to="/guild_card" className="hover:text-indigo-300 transition">
          Guild Card
        </Link>

      </div>
    </nav>
  );
}
