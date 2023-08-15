import axios from "axios";

/**
 * Login method to ReqRes endpoint
 *  @param { string } Email
 *  @param { string } password
 */ 
export const login = (email, password) => {
    
    let body = {
        email: email,
        password: password
    }

    // Returns the response with a Promise 
    return axios.post('https://reqres.in/api/login', body)
    
}