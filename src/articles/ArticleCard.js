import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './ArticleCard.css';
import { getSavedArticles, removeArticle, saveArticleToState } from '../reducer/actions';

const ArticleCard = ({ source, author, title, description, url, imageUrl, date, content, id }) => {
    const dispatch = useDispatch();
    const savedArticles = useSelector(st => st.articleReducer.savedArticles);

    let [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        console.log('render');
        for (let article of savedArticles) {
            if (article.url === url) {
                setIsSaved(true);
            }
        }
    }, [savedArticles, url]);

    let article = {
        "username": localStorage.getItem('user'),
        "source": source || '',
        "date": date || '',
        "author": author || '',
        "title": title || '',
        "description": description || '',
        "url": url || '',
        "image_url": imageUrl || '',
        "content": content || ''
    }
    async function addToReadList(article) {
        console.log('adding');
        let res = await dispatch(saveArticleToState(article));
        console.log(res);
    }

    async function removeFromReadList(id, url) {
        setIsSaved(!isSaved)
        if (id === null) {
            function getId(url) {
                for (let article of savedArticles) {
                    if (article.url === url) {
                        return article.id;
                    }
                }
            }
            let newId = getId(url);
            await dispatch(removeArticle(parseInt(newId)));
        } else {
            await dispatch(removeArticle(id));

        }
        await dispatch(getSavedArticles());

    }


    return (
        <div className='ArticleCard'>
            <Card className='ArticleCard-card'>
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    {description === null || description.startsWith('Read more...') || description.includes('<li>') ? '' : <CardSubtitle tag="h6" className="mb-2 mt-1 text-muted">{description}</CardSubtitle>}
                    {author === null || author.startsWith('http') ? <CardSubtitle tag="h6" className="mt-3 text-muted">{source} - {date.slice(0, 10)}</CardSubtitle> : <CardSubtitle tag="h6" className="mt-3 text-muted">{author} - {source} - {date.slice(0, 10)}</CardSubtitle>}

                </CardBody>
                <CardBody className='ArticleCard-imgBody'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            {imageUrl === null ? '' : <img width="100%" src={imageUrl} alt={title} />}

                        </div>
                        <div className='col-lg-4 mt-3'>
                            <CardText>{content}</CardText>
                        </div>
                    </div>


                    <CardLink className='btn btn-info mx-3 mt-4' href={url} target='_blank'>Go To Article</CardLink>
                    {localStorage.token && (!isSaved) ? <CardLink className='btn btn-secondary mx-3 mt-4' onClick={() => addToReadList(article)}>Add to Read List</CardLink> : ''}
                    {localStorage.token && isSaved ? <CardLink className='btn btn-danger mx-3 mt-4' onClick={() => removeFromReadList(id || null, url)}>Remove From Read List</CardLink> : ''}

                </CardBody>
            </Card>

        </div>

    )
}

export default ArticleCard;