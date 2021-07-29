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
        if (headlines.length < 1) {

            getHeadlines();
        }
    }, [dispatch, headlines]);

    return (
        <div>
            <h1 className='display-4 mt-3'>top headlines</h1>
            <ArticlesList articles={headlines} />
        </div>
    )
}

export default Home;