import { useEffect } from 'react'
import {
    Container,
} from '../fragments/ProductComponents'
import { VivaContactUs } from '../../home/fragments/VivaContactUs'
import { PageContainer } from './fragments/ProductDetailsComponent'
import ProductDetailsCard from './fragments/ProductDetailsCard'
import ProductRecommendation from './fragments/ProductRecommend'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    // const params = useParams<{ productName: string; }>(); // use this to get the class name from the URL
    useEffect(() => {
        if (window && process.env.NODE_ENV !== 'test') {
            window.scrollTo(0, 0)
        }
    }, [])
    return (
        <Container>
            <PageContainer >
                <Link className="back-button" to="/shop" style={{ textTransform: 'none', textDecoration: 'none' }}>
                    <ArrowBackIos fontSize="small" />
                    <Typography className="product-title" textAlign="left" variant="caption" sx={{ fontFamily: 'Questrial', fontWeight: 400, fontSize: '.9rem', color: '#4f5157' }}>
                        Back to shop
                    </Typography>
                </Link>
                <ProductDetailsCard />
                <ProductRecommendation />
            </PageContainer>
            <VivaContactUs />
        </Container>
    )
}

export default ProductDetails