import React from 'react'
import titulo from '../../img/titulo.png';
import './Bienvenid.css';

const Bienvenido = () => {
    return (
        <div>
            <br/>
            <div className="fondo centrarDiv">
                <img src={titulo} alt="logo sappis" className="titulo" />
                <div className="card text-black border-primary mb-3 tarjetagrande rojito" style={{ maxWidth: 28 + 'rem' }}>
                    <div className="card-header centrartexto"><h1 className="letra">Bienvenidos</h1> <p className="lChiquita">a su página, gracias por el apoyo. Pueden buscarme en mis redes sociales para poder platicar o unirse a nuestro servidor de Discord para poder jugar juntos.</p></div>
                </div>
            </div>
        </div>
    )
}

export default Bienvenido
