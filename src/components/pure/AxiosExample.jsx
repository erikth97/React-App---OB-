import React, {useState, useEffect} from 'react';
import { getRandomUser } from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getRandomUser()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
        }, [])       

    
    return (
        <div>

        </div>
    );
}     

export default AxiosExample;
