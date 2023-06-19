import React, { useState } from 'react';


// Login / Logout buttons
 const LoginButton = ({loginAction}) => {
    return (
        <button onClick={loginAction}>Login</button>
    )
 }

 const LogoutButton = ({logoutAction}) => {
    return (
        <button onClick={logoutAction}>Logout</button>
    )
 }





 const OptionalRender = () => {
    
    const [access, setAccess] = useState(true);

    // const updateAccess = () => {
    //    setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true)
    }
    
    const logoutAction = () => {
        setAccess(false)
    }


    let optionalButton;

    //if (access) {
    //    optionalButton = <button onClick={updateAccess}>Logout</button>
    //}else{
    //    optionalButton = <button onClick={updateAccess}>Login</button>
    //}

    if (access) {
        optionalButton = <LogoutButton logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton loginAction={loginAction}></LoginButton>
    }

    return (
        <div>
            { optionalButton }
        </div>
    );
}

export default OptionalRender;
