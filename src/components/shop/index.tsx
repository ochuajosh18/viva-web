import { useCallback, useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getProductCategories } from '../../store/productCategory/actions';
import { setProductState, getProducts } from '../../store/shop/actions';
import { AppState } from '../../store';
import { 
    Container, 
    ProductBannerContainer,
    ProductBannerGridContainer,
    ProductBannerGridItem,
    ProductBannerScrollContainer,
    ProductBannerScrollDown
} from './fragments/ProductComponents'
import ProductTypes from './fragments/ProductTypes'
import Products from './fragments/Products'
import { VivaContactUs } from '../home/fragments/VivaContactUs'
import Typography from '@mui/material/Typography'
import BannerImage from '../../assets/images/shop/hero_1-2.png'

const ShopIndex = () => {
    const dispatch = useDispatch()
    const { products, loading } = useSelector((state: AppState) => state.shop)
    const { productCategories, productCategoryLoading } = useSelector((state: AppState) => state.productCategory)
    const [activeProductType, setActiveProductType] = useState({ id: 'CLASS::TYPE::MUSIC', name: 'Music' });

    useEffect(() => {
        dispatch(getProducts({ category: activeProductType.name }))
        dispatch(getProductCategories())
    }, [dispatch])

    const _setActiveType = useCallback((type: any) => {
        setActiveProductType(type)
        dispatch(getProducts({ category: type.name }))
    }, [activeProductType])

    return (
        <Container>
            <ProductBannerContainer>
                <ProductBannerGridContainer>
                    <ProductBannerGridItem xs={12} sm={6} sx={{ paddingTop: { xs: 4, sm: 0 }}}>
                        <Typography className="hero-header" variant="caption" sx={{ fontSize: 32, fontFamily: 'Poppins', marginBottom: { xs: 2, sm: 0 } }}>
                            We Offer Quality Books
                        </Typography>
                        <Typography className="hero-sub-header" variant="caption" sx={{ fontSize: 16, mt: "1.5em" }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, unde, assumenda tenetur suscipit consequuntur ea velit eaque, quam consectetur reiciendis voluptates veniam dicta totam quidem molestias corrupti ex qui magnam?
                        </Typography>
                    </ProductBannerGridItem>
                    <ProductBannerGridItem xs={12} sm={6} sx={{ alignItems: 'center', paddingLeft: { xs: 0, sm: 2 }}}>
                        <img src={BannerImage} alt="" />
                    </ProductBannerGridItem>
                </ProductBannerGridContainer>
                <ProductBannerScrollContainer>
                    <Typography variant="caption" sx={{ fontFamily: 'Questrial' }}>
                        Scroll Down
                    </Typography>
                    <ProductBannerScrollDown />
                </ProductBannerScrollContainer>
            </ProductBannerContainer>
            <ProductTypes productCategories={productCategories} loading={productCategoryLoading} activeProductType={activeProductType} onActiveProductTypeClick={(type) => _setActiveType(type)} />
            <Products products={products} loading={loading} />
            <VivaContactUs />
        </Container>
    )
}

const mapStateToProps = (state: AppState) => ({
    shop: state.shop
})

const mapDispatchToProps = {
    setProductState,
    getProductCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopIndex) 