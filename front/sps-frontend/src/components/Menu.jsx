import { Link } from "react-router"
import { Router } from "../router/AppRouter"

function Menu(){
  return(
    <div className='menu'>
      <nav>
        <Link to="/"> Inicios </Link>
        <Link to="/Login"> Iniciar Sesión </Link>
        <Link to="/Archivo">Archivo</Link>
      </nav>
      <Router />
    </div>
  )
}
export {Menu}