import React from 'react';
import ArticleCard from './ArticleCard';

const ArticlesList = ({ articles }) => {
    return (
        <div className='ArticlesList mb-5'>
            {articles.map(article => <ArticleCard key={article.url} source={article.source.name} author={article.author}
                title={article.title} description={article.description} url={article.url} imageUrl={article.urlToImage}
                date={article.publishedAt} content={article.content} />)}
        </div>
    )
}

export default ArticlesList;