import React, { useEffect } from 'react';
import ArticleCard from './ArticleCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSavedArticles } from '../reducer/actions';
import { useHistory } from 'react-router-dom';

const MyArticles = () => {
    const articles = useSelector(st => st.articleReducer.savedArticles);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.token) {
            history.push('/');
        }
        async function getArticles() {
            await dispatch(getSavedArticles());
        }
        getArticles();
    }, [dispatch, history]);


    return (
        <div className='MyArticles mb-5'>
            <h1 className='display-4 mt-3'>my articles</h1>
            {articles.length === 0 ? <h5 className='text-muted mt-5'><i>you don't have any saved articles...</i></h5> : ''}
            {articles.map(article => <ArticleCard key={article.id} id={article.id} source={article.source.name} author={article.author}
                title={article.title} description={article.description} url={article.url} imageUrl={article.image_url}
                date={article.date} content={article.content} />)}
        </div>

    )
}

export default MyArticles;