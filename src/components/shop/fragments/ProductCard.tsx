import { Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ProductCardContainer, ProductCardImageContainer, ProductPriceContainer } from './ProductComponents'
import { sanitizeUri } from '../../../utils/sanitizeUri'

interface ProductCardProps {
    id: string;
    image: string;
    name: string;
    dateCreated: string;
    price: number;
    category: string;
}

const ProductCard = ({ id, image, name, dateCreated, price, category }: ProductCardProps) => {
    return (
        <ProductCardContainer className="product-box">
            <Link to={`/shop/${id}`} style={{ textTransform: 'none', textDecoration: 'none' }}>
                <ProductCardImageContainer className="product-image">
                    <img src={image} alt={`${name}`} />
                </ProductCardImageContainer>
                <Typography className="product-title" textAlign="left" variant="caption" sx={{ display: 'block', marginBottom: '-7px', fontSize: 26, fontWeight: 'semibold', fontFamily: 'Poppins', color: '#393257' }}>
                    {name}
                </Typography>
                <Typography className="product-publish" textAlign="left" variant="caption" sx={{ fontSize: 16, fontWeight: 'regular', fontFamily: 'Questrial', color: '#1A1A26', opacity: '50%' }}>
                    Published {new Date(dateCreated.substring(0, 10)).toDateString().slice(4)}
                </Typography>
            </Link>
            <ProductPriceContainer>
                <Typography className="product-price" textAlign="left" variant="caption" sx={{ marginTop: 1, fontSize: 22, fontFamily: 'Questrial', color: '#393257' }}>
                    $ {(Math.round(price * 100) / 100).toFixed(2)}
                </Typography>
                <Button className={`hide-download show-${price == 0 && category === 'Books' ? 'download' : ''}`}>
                    Download
                </Button>
            </ProductPriceContainer>
        </ProductCardContainer>
    )
}

export default ProductCard