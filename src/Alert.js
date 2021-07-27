import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from './reducer/actions';

const AlertComponent = () => {
    const [visible, setVisible] = useState(false);
    const alert = useSelector(st => st.alertReducer.alert);
    const dispatch = useDispatch();

    /* checks state to see if alert message, if there is, makes alert visible */
    useEffect(function () {
        if (alert.message) {
            setVisible(true);
        }
    }, [alert])

    function onDismiss() {
        setVisible(false);
        dispatch(clearAlert());
    }

    return (

        <Alert color={alert.color} isOpen={visible} className='mt-4' toggle={onDismiss}>
            {alert.message}
        </Alert>
    )
}

export default AlertComponent;