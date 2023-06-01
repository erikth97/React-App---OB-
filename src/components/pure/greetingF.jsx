import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {

    // Breve introduccion a useState
    // const [variable, metodo para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(25);

    const birthday = () => {
        // Actualizamos el State
        setage(age +1);
    }

    return (
        <div>
            <h1>
                ¡HEY { props.name } desde componente funcional !
            </h1>
            <h2>
                Tu edad es de: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string
};


export default Greetingf;



