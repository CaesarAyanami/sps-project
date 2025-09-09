import { Link } from "react-router-dom"
import casa from '../assets/hogar.svg'
import archivo from '../assets/carpeta-abierta.svg'


function Menu(){
  return(
    <div className='flex justify-center flex-row bg-slate-500 text-white"'>
      <nav className="flex gap-1">
        <Link className="nav-element flex items-center gap-2 px-3 py-3 rounded hover:bg-gray-200 hover:text-blue-500 transition duration-300" to="/home">
          <img src={casa} alt="Inicio" className="w-5 h-5"/>
          <span>Inicio</span>
        </Link>
        <Link className="nav-element flex items-center gap-2 px-3 py-3 rounded hover:bg-gray-200 hover:text-blue-500 transition duration-300" to="/archive">
          <img src={archivo} alt="Inicio" className="w-5 h-5"/>
          <span>Archivo</span>
        </Link>
      </nav>
    </div>
  )
}
export default Menu