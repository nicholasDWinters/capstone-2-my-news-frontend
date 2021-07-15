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
            <h1 className='display-4'>{topic}</h1>
            <ArticlesList articles={articles} />
        </div>
    )
}

export default NewsArticles;