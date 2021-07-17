import React from 'react';
import { Alert } from 'reactstrap';

const AlertComponent = ({ alert }) => {
    return (


        <Alert color={alert.color} className='mt-4'>
            {alert.message}
        </Alert>
    )
}

export default AlertComponent;