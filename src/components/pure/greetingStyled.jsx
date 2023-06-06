import React, { useState } from 'react';

// Definiendo estilos en constantes

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = () => {

    //Generamos un estado para el componente
    // y asi controlar si el usuario esta o no logeado
    const [logged, setLogged] = useState(false)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
              <p>Hola, {props.name}</p>
              <button onClick={() => {
                console.log('Boton pulsado');
                setLogged(!logged);
              }}>
                  { logged ? 'Logout' : 'Login' }
              </button>
        </div>
    );
}

export default GreetingStyled;
