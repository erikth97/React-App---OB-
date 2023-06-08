import React, { useRef } from 'react';

const Child = ({ name, send }) => {

    const messageRef = useRef('')

     function pressBoton(){
        const text = messageRef.current.value;
        alert(`Text in Input: ${text}`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>
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
               placeholder = 'Send a text to your father'
               onFocus={() => console.log('Input Focused')} 
               onChange={(e) => console.log('Input Changed:',  e.target.value)}
               onCopy={() => console.log('Copied text from Input')}
               ref= {messageRef} 
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop: '20px'}}>

            </div>
        </div>
    );
}

export default Child;
