import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/fetchService';

const Fetchexample = () => {

    const [users, setUsers] = useState( [] )

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
        .then((response) => {
            console.log('All users', response.data);
            setUsers(response.data);
        })
        .catch((error) => {
            alert(`Error while retreving the users: ${error}`)
        })
        .finally(() => {
            console.log('Ended obtaning user: ')
            console.table(users)
        })
  }

    return (
        <div>
            <h2>
                Users:
            </h2>
            { users.map((user, index) =>
               (<p key={index}>
                  {user.first_name}
               </p>)
                )
            }
        </div>
    );
}

export default Fetchexample;
 