import React from 'react';

const Child = ({ name }) => {

     function pressBoton(){
        alert(`Default Text`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }




    return (
        <div>
            <p onMouseOver={() => console.log('On Mouse Over')}>Child Component</p>
            <button onClick={() => console.log('Pressed Button 1')}>
                Button 1
            </button>
            <button onClick= {pressBoton}>
                Button 1
            </button>
            <button onClick={ () => pressButtonParams('Hello')}>
                Button 3 
            </button>
            <input
               placeholder='Insert a text'
               onFocus={() => console.log('Input Focused')} 
               onChange={(e) => console.log('Input Changed:',  e.target.value)}
               onCopy={() => console.log('Copied text from Input')} 
            />
        </div>
    );
}

export default Child;
