
import { error } from 'console';
import React from 'react';

const AsyncExample = () => {

   async function generateNumber(){
    return 1;
   }

   async function generatePromiseNumber(){
    return Promise.resolve(2)
   }

   function obtainNumber(){
    generateNumber()
           .then((response) => alert(`Response: ${response}`))
           .catch((error) => alert(`Something went wrong: ${error}`))
   }

   function obtainPromiseNumber(){
    generatePromiseNumber()
           .then((response) => alert(`Response: ${response}`))
           .catch((error) => alert(`Something went wrong: ${error}`))
   }

   async function saveSesionStorage(key, value) {
      sessionStorage.setItem(key, value);
       return Promise.resolve(sessionStorage.getItem(key))
   }

   function showStorage(){
        saveSesionStorage('name', 'Erik')
           .then((response) => {
            let value = response;
            alert(`Saved Name: ${value}`);
           }).catch((error) => {
            alert(`Something went wrong: ${error}`)
           }).finally(() => { 
           alert('SUCCESS: Name saved and retreived')
        })
   }

   async function obtainMessage() {

       let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello Word'), 2000)
       });

       let message = await promise;
       await alert(`Message received: ${message}`)
   
    }

    const consumeError = async() => {
        returnError()
           .then((response) =>alert(`Everything is OK: ${response}`))
           .catch((error) => alert(`Something went wrong: ${error}`))
           .finally(() => alert('Finally executed'))            
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL.com')
            alert(`Response: ${JSON.stringify(response)}`)      
        } catch (error) {
            alert(`Something went wrong whith your URL: ${error} (check your console)`)
        }

    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went whit your URLs: ${error} (check your console)`))
    }


    return (
        <div>
             <h1>Async, Promise Examples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>  
            <button onClick={showStorage}>Save Name and Show</button>    
            <button onClick={obtainMessage}>Recive message in 2 seconds</button>    
            <button onClick={consumeError}>Obtain Error</button>  
            <button onClick={urlNotFound}>Request to Unknow URL</button>  
            <button onClick={multiplePromise}>Multiple Promise</button>  
        </div>
    );
}

export default AsyncExample;
