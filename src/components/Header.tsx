import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  CalendarDaysIcon,
  HomeIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="flex justify-between items-center bg-gray-800 p-4 text-white relative">
      <h3 className="font-bold text-3xl">Next Match ⚽️🏟️</h3>
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="md:hidden text-white"
      >
        <Bars3Icon className="h-8 w-8" />
      </button>

      {menuAbierto && (
        <div className="absolute top-16 right-1 bg-gray-700 p-3 rounded-md shadow-2xl w-35  md:hidden">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              className="hover:text-gray-400 flex"
              onClick={() => setMenuAbierto(false)}
            >
              <HomeIcon className="h-5 w-8"></HomeIcon>Inicio
            </Link>
            <Link
              to="/partidos"
              className="hover:text-gray-400 flex"
              onClick={() => setMenuAbierto(false)}
            >
              <CalendarDaysIcon className="w-8 h-5" />
              Partidos
            </Link>
            <Link
              to="/ligas"
              className="hover:text-gray-400 flex"
              onClick={() => setMenuAbierto(false)}
            >
              <TrophyIcon className="w-8 h-5" /> Ligas
            </Link>
          </nav>
        </div>
      )}

      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-400 flex">
          <HomeIcon className="h-5 w-8"></HomeIcon>Inicio
        </Link>
        <Link to="/partidos" className="hover:text-gray-400 flex">
          <CalendarDaysIcon className="w-8 h-5" /> Partidos
        </Link>
        <Link to="/ligas" className="hover:text-gray-400 flex">
          <TrophyIcon className="w-8 h-5" />
          Ligas
        </Link>
      </nav>
    </header>
  );
}

export default Header;
