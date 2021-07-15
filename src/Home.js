import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopHeadlinesFromAPI } from './reducer/actions';
import ArticlesList from './articles/ArticlesList';

const Home = () => {
    const headlines = useSelector(st => st.articleReducer.topHeadlines);
    const dispatch = useDispatch();

    useEffect(function () {
        async function getHeadlines() {
            await dispatch(getTopHeadlinesFromAPI());
        }
        getHeadlines();
    }, [dispatch]);

    return (
        <div>
            <h1 className='display-4'>top headlines</h1>
            <ArticlesList articles={headlines} />
        </div>
    )
}

export default Home;