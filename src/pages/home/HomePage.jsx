import React from 'react';
import { useHistory, useLocation } from 'react-router';


const HomePage = () => {
    const location = useLocation();
    const history = useHistory();

    console.log('We are in Router:', location.pathname); // '/about | /faqs'

    const navigate = (path) => {
        history.push(path);
    }

    return (
    <div>
        <h1>Home Page</h1>
        <button onClick={() => navigate('/profile')}>
            Go to Profile
        </button>
    </div>
    )
}
export default HomePage;
