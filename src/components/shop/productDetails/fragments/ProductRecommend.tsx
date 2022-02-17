import { ProductRecommendContainer } from './ProductDetailsComponent'
import { ProductsContainer } from '../../fragments/ProductComponents'
import ProductCard from '../../fragments/ProductCard'
import { Typography } from "@mui/material"

const ProductRecommendation = () => {
    const PRODUCTS_SAMPLE = [
        {
            "id": "sample-product-1",
            "category": "Dance",
            "dateCreated": "2021-12-07 12:18:30.500+08:00",
            "image": "https://suites-staging.ap-south-1.linodeobjects.com/viva/promotion/58fbb542-e429-47ae-b0a6-4044c4a9c084_263307935_485889296160223_854676760128284351_n.png",
            "name": "The how to really play the piano",
            "price": 25,
        },
        {
            "id": "sample-product-2",
            "category": "Dance",
            "dateCreated": "2021-12-07 12:38:13.258+08:00",
            "image": "https://suites-staging.ap-south-1.linodeobjects.com/viva/promotion/f847a216-8483-4353-be5c-485a8dbbd3b2_263475455_1078148272943088_1542444473793810952_n.png",
            "name": "The Violin",
            "price": 15,
        },
        {
            "id": "sample-product-3",
            "category": "Dance",
            "dateCreated": "2021-12-07 12:38:09.059+08:00",
            "image": "https://suites-staging.ap-south-1.linodeobjects.com/viva/promotion/d5985f53-61b4-49d1-b282-8e152c3957fb_263380407_448083423552388_2780840244033687553_n.png",
            "name": "Aquila",
            "price": 20,
        }
    ]

    return (
        <ProductRecommendContainer>
            <Typography textAlign="left" variant="caption" sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '35px', letterSpacing: 0, color: '#393257' }}>
                Recommended Books
            </Typography>
            <ProductsContainer>
                {PRODUCTS_SAMPLE.map((p) => {
                    return (
                        <ProductCard
                            id={p.id}
                            image={p.image}
                            name={p.name}
                            dateCreated={p.dateCreated}
                            price={p.price}
                            category={p.category}
                            key={p.name}
                        />
                    )
                })}
            </ProductsContainer>
        </ProductRecommendContainer>
    )
}

export default ProductRecommendation