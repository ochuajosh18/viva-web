import { useEffect } from 'react'
import { VivaContactUs } from '../../home/fragments/VivaContactUs'
import { Container, PageContainer } from './fragments/NewsDetailsComponent'
import NewsDetailsCard from './fragments/NewsDetailsCard'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const NewsDetails = () => {
    useEffect(() => {
        if (window && process.env.NODE_ENV !== 'test') {
            window.scrollTo(0, 0)
        }
    }, [])

    return (
        <Container>
            <PageContainer >
                <Link className="back-button" to="/home" style={{ textTransform: 'none', textDecoration: 'none' }}>
                    <ArrowBackIos fontSize="small" />
                    <Typography className="product-title" textAlign="left" variant="caption" sx={{ fontFamily: 'Questrial', fontWeight: 400, fontSize: '.9rem', color: '#4f5157' }}>
                        Back to news & articles
                    </Typography>
                </Link>
                <NewsDetailsCard />
            </PageContainer>
        </Container>
    )
}

export default NewsDetails;