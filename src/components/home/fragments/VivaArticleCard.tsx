import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { ArticleCardContainer, ArticleCardImageContainer } from './HomeComponents'

interface PropsInterface {
    image: string;
    title: string;
    content: string;
    dateCreated: string;
}

const ArticleCard = ({ image, title, content, dateCreated }: PropsInterface) => {
    return (
        <ArticleCardContainer>
            <Link to={`/articles/${title}`} style={{ textTransform: 'none', textDecoration: 'none' }}>
                <ArticleCardImageContainer className="article-image">
                    <img src={image} alt={`${title}`} />
                </ArticleCardImageContainer>
                <Typography className="article-date">
                    Published {new Date(dateCreated.substring(0, 10)).toDateString().slice(4)}
                </Typography>
                <Typography className="article-title">
                    {title.length > 35 ? `${title.slice(0,35)}...` : title}
                </Typography>
                <Typography 
                    className="article-content innerHTML-style" 
                    dangerouslySetInnerHTML={{ 
                        __html: content.length > 180 ? `${content.slice(0, 180)}...` : content 
                    }}
                >
                </Typography>
            </Link>
        </ArticleCardContainer>
    )
}

export default ArticleCard