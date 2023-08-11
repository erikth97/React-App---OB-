export const getAllUsers = async () => {
    
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?:', response.ok);
    
     //we return the json 
     return response.json()
}


export const getAllUsers = async () => {
    
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response:', response);
    console.log('Status:', response.status);
    console.log('OK?:', response.ok);
    
     //we return the json 
     return response.json()
}