import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';

import Copyrigth from '../../components/pure/Copyrigth';

const Dashboardpage = () => {

    const history = useHistory();

    const logout = () => {
        history.push('./login')
    }

    return (
        <div>
              <Button variant="contained" onClick={logout}>Logout</Button>
              <Copyrigth></Copyrigth>
        </div>
    );
}

export default Dashboardpage;
 