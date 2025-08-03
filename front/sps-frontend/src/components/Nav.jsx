import { Link } from "react-router"

function Nav(){
  return(
    <nav>
      <Link to="/"> Inicios </Link>
      <Link to="/Login"> Iniciar Sesión </Link>
      <Link to="/Archivo">Archivo</Link>
    </nav>
  )
}
export {Nav}
