import React from 'react';
import { useParams } from 'react-router-dom';

const NewsArticles = () => {
    let { topic } = useParams();
    return (
        <div>
            <h1 className='display-3 mt-3'>{topic}</h1>
        </div>
    )
}

export default NewsArticles;