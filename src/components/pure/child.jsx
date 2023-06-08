import React from 'react';

const Child = ({ name }) => {

    pressBoton(){

    }




    return (
        <div>
            <p>Child Component</p>
            <button onClick={() => console.log('Boton 1 pulsado')}>
                Boton 1
            </button>
            <button onClick={() => console.log('Boton 1 pulsado')}>
                Boton 1
            </button>
        </div>
    );
}

export default Child;
