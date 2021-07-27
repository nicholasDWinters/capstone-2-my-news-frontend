import React, { useState } from 'react';
import { Container, Form, FormGroup, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
    let history = useHistory();
    let initial = {
        topic: ''
    };
    let [data, setData] = useState(initial);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    /* can just push the new topic to history, as that route utilizes 
    useParams to check the topic, and display correct articles */
    const handleSubmit = evt => {
        evt.preventDefault();
        history.push(`/${data.topic}`);
        setData(initial);
    };

    return (
        <div>
            <Container className='jumbo mt-4 pt-2 pb-2' fluid>
                <h1 className="display-3">my news</h1>
                <p className="lead">your best source for news, on your time </p>
                <Form className='mx-auto' onSubmit={handleSubmit} inline>
                    <FormGroup className='mx-auto mb-2'>
                        <Input className='mt-1' type="text" name="topic" placeholder="pick a topic..." value={data.topic} onChange={handleChange} />
                        <button className='mx-2 mt-1 btn btn-outline-info'>search</button>
                    </FormGroup>

                </Form>
            </Container>
        </div>

    )
}

export default SearchForm;