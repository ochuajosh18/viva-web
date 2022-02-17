import { ProductContainer, ProductImageContainer, ProductDescriptionContainer, ProductPriceContainer, ProductSkeleton } from './ProductDetailsComponent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { InputAdornment, Button, Skeleton, CircularProgress, Box } from '@mui/material'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { getProducts } from '../../../../store/shop/actions';
import { removeAscii } from '../../../../utils/sanitizeUri'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../store';

const ImageLoading = () => {
    return (
        <CircularProgress />
    )
}

const ProductDetailsCard = () => {
    const product = useParams<{ id: string; }>();
    const dispatch = useDispatch()
    const { products, loading } = useSelector((state: AppState) => state.shop)

    useEffect(() => {
        dispatch(getProducts({
            id: product.id
        }))
    }, [dispatch, product.id])

    return (
        <ProductContainer>
            <ProductImageContainer xs={12} sm={3} >
                {/* use products image key once the server has been updated with the missing image field */}
                {
                    loading ? <ImageLoading /> : <img src={products[0]?.image} alt={products[0]?.image} />
                }
            </ProductImageContainer>
            <ProductDescriptionContainer xs={12} sm={7}>
                {
                    loading ? <ProductSkeleton /> : <Box>
                        <Typography textAlign="left" variant="caption" sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '35px', letterSpacing: 0, color: '#393257' }}>
                            {products[0]?.name}
                        </Typography>
                        <Typography className="product-publish" textAlign="left" variant="caption" mt={-1} sx={{ display: 'block', fontSize: 16, fontWeight: 'regular', fontFamily: 'Questrial', color: '#393257', opacity: '50%' }}>
                            Published {new Date(products[0]?.dateCreated.substring(0, 10)).toDateString().slice(4)}
                        </Typography>
                        <ProductPriceContainer mt={2} columnGap={4}>
                            <Typography textAlign="left" variant="caption" sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '25px', letterSpacing: 0, color: '#393257' }}>
                                $ {(Math.round(products[0]?.price * 100) / 100).toFixed(2)}
                            </Typography>
                            {
                                products[0]?.price == 0 && products[0]?.category === 'Books' ? <Button>
                                    Download
                                </Button> : <TextField
                                    type="number"
                                    sx={{ m: 1, width: '22ch', fontFamily: 'Questrial', }}
                                    variant="standard"
                                    defaultValue="1"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Qty:</InputAdornment>,
                                    }}
                                    inputProps={{ min: 1 }}
                                />
                            }
                        </ProductPriceContainer>
                        <Typography textAlign="left" variant="caption" mt={3} sx={{ display: 'block', fontSize: 16, fontWeight: 'regular', fontFamily: 'Questrial', color: '##393257', paddingRight: { xs: 0, sm: '100px' }, }}>
                            {/* change to products description key once the server has been updated with description */}
                            { products[0]?.description }
                        </Typography>
                        <Button variant="contained" size="large" endIcon={<ArrowForward />} sx={{ mt: 4, width: '25ch', borderRadius: '14px', textTransform: 'unset', padding: '13px 0' }}>Add to Cart</Button>
                    </Box>
                }
            </ProductDescriptionContainer>
        </ProductContainer>
    )
}

export default ProductDetailsCard