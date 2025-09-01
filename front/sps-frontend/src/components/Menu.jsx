import { Link } from "react-router-dom"

function Menu(){
  return(
    <div className='menu'>
      <nav>
        <Link className="nav-element" to="/home"> Inicio </Link>
        <Link className="nav-element" to="/archive">Archivo</Link>
      </nav>
    </div>
  )
}
export default Menu