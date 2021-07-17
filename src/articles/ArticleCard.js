import React from 'react';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './ArticleCard.css';

const ArticleCard = ({ source, author, title, description, url, imageUrl, date, content }) => {

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
                    {localStorage.token ? <CardLink className='btn btn-secondary mx-3 mt-4' onClick={() => console.log('clicked')}>Add to Read List</CardLink> : ''}

                </CardBody>
            </Card>

        </div>
    )
}

export default ArticleCard;