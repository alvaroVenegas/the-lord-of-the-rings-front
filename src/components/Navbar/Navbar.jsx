import React from 'react';
import { Link} from 'react-router-dom';


const Navbar = () =>{
    return(
        <div>
            <Link to='/characters'>Personajes</Link>
            <Link to='/locations'>Localizaciones</Link>
            <Link to='/weapons'>Armas</Link>
            <Link to='/items'>Objetos</Link>
            
            <Link to='/characters/create'>Crear Personaje</Link>
            <Link to='/locations/create'>Crear Localizacion</Link>
            <Link to='/weapons/create'>Crear Arma</Link>
            <Link to='/items/create'>Crear Objeto</Link>
            
            <Link to='/users/register'>Registro</Link>
            <Link to='/users/login'>Login</Link>
        </div>
    )
}

export default Navbar