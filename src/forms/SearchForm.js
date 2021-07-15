import React from 'react';
import { Container, Form, FormGroup, Input } from 'reactstrap';

const SearchForm = () => {
    return (
        <div>
            <Container className='jumbo mt-5' fluid>
                <h1 className="display-3">my news</h1>
                <p className="lead">your best source for news, on your time </p>
                <Form className='mx-auto' inline>
                    <FormGroup className='mx-auto mb-2'>
                        <Input className='mt-1' type="text" name="search" placeholder="pick a topic..." />
                        <button className='mx-2 mt-1 btn btn-outline-info'>search</button>
                    </FormGroup>

                </Form>
            </Container>
        </div>

    )
}

export default SearchForm;