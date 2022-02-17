import { 
    ArticleDetailsBannerContainer,
    ArticleDetailsContainer,
    ArticleDetailsDescriptionContainer
} from './NewsDetailsComponent';
import { getNews } from '../../../../store/news/actions';
import { removeAscii } from '../../../../utils/sanitizeUri'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../store';
import Typography from '@mui/material/Typography'


const NewsDetailsCard = () => {
    const article = useParams<{ title: string; }>();
    const dispatch = useDispatch()
    const { news } = useSelector((state: AppState) => state.news)

    useEffect(() => {
        dispatch(getNews({
            title: article.title
        }))
    }, [dispatch, article.title])

    return (
        <ArticleDetailsContainer>
            <ArticleDetailsBannerContainer className="article-image">
                <img src={news[0]?.image} alt="" />
            </ArticleDetailsBannerContainer>
            <ArticleDetailsDescriptionContainer>
                <Typography textAlign="center" variant="caption" sx={{ color: '#393257', fontSize: 32, fontFamily: 'Questrial', marginBottom: 2, fontWeight: 'bold'  }}>
                    {article.title}
                </Typography>
                <Typography textAlign="center"  variant="caption" sx={{ color: '##1A1A26', padding: { xs: 0, sm: '0 80px' }, fontSize: 14, fontFamily: 'Questrial', marginBottom: { xs: 2, sm: 4 }}}>
                    <div className="innerHTML-style" dangerouslySetInnerHTML={{ __html: news[0]?.content }}></div>
                </Typography>
            </ArticleDetailsDescriptionContainer>
        </ArticleDetailsContainer>
    )
}

export default NewsDetailsCard;