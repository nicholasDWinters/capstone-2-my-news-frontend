import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearAlert, registerUser, setUser } from '../reducer/actions';
import { Form, FormGroup, Input, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    let initial = {
        username: '',
        password: '',
        email: ''
    }
    const [data, setData] = useState(initial);


    async function signup(data) {
        try {
            let res = await dispatch(registerUser(data));
            let user = { "username": data.username };
            if (res.type !== 'ADD_ALERT') {
                dispatch(setUser(user));
                localStorage.setItem('user', user.username);
                history.push('/');
            }

        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(clearAlert());
        signup(data);
        setData(initial);

    };

    return (
        <div>
            <h1 className='display-4 mt-3'>register</h1>
            <Form className='mx-auto mt-3 row' onSubmit={handleSubmit}>

                <Col md={6}>
                    <FormGroup className='mx-auto mb-2'>
                        <Input className='mt-3' type="email" name="email" placeholder="email" value={data.email} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='mx-auto mb-2'>
                        <Input className='mt-3' type="text" name="username" placeholder="username" value={data.username} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='mx-auto mb-2'>
                        <Input className='mt-3' type="password" name="password" placeholder="password" value={data.password} onChange={handleChange} />
                    </FormGroup>

                    <button className='mx-2 mt-3 btn btn-outline-info'>register</button>
                </Col>
            </Form>
        </div>
    )
}

export default RegisterForm;