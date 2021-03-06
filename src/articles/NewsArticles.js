import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import { getTopicArticlesFromAPI } from '../reducer/actions';

const NewsArticles = () => {
    let { topic } = useParams();
    const dispatch = useDispatch();
    const articles = useSelector(st => st.articleReducer.topicArticles);

    useEffect(function () {
        async function getArticles() {
            await dispatch(getTopicArticlesFromAPI(topic));
        }
        getArticles();
    }, [dispatch, topic]);

    return (
        <div>
            <h1 className='display-4 mt-3'>{topic}</h1>
            {articles.length > 0 ? <ArticlesList articles={articles} /> : <h5 className='text-muted mt-5'><i>could not find articles about {topic}...</i></h5>}

        </div>
    )
}

export default NewsArticles;