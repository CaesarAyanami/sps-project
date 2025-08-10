import { Link } from "react-router-dom"

function Menu(){
  return(
    <div className='menu'>
      <nav>
        <Link to="/"> Inicios </Link>
        <Link to="/login"> Iniciar Sesión </Link>
        <Link to="/archive">Archivo</Link>
      </nav>
    </div>
  )
}
export {Menu}