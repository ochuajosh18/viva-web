import { ProductTypesContainer, ProductTypeButton } from './ProductComponents'
import { ProductCategory } from '../../../store/productCategory/types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { CircularProgress, Skeleton } from '@mui/material'

interface ActiveTypeInterface {
    id: string;
    name: string;
}

interface ProductTypesProps {
    activeProductType: ActiveTypeInterface;
    onActiveProductTypeClick: (active: object) => void;
    productCategories: Array<ProductCategory>;
    loading: boolean;
}

const ProductTypes = ({ activeProductType, onActiveProductTypeClick, productCategories, loading }: ProductTypesProps) => {
    return (
        <ProductTypesContainer>
            <Typography variant="h4" sx={{ fontFamily: 'Questrial', fontWeight: 'bold', color: '#393257', mt: "3rem" }}>
                Great collection of Books for Dance & Music
            </Typography>
            <Box sx={{ my: "2rem", width: '100vw', textAlign: 'center' }}>
                {loading ? [1].map(e => { return (<CircularProgress size={24} key={e} />) }) : productCategories.map((p, index) => {
                    return (
                        <ProductTypeButton onClick={() => onActiveProductTypeClick({ id: p.id, name: p.name })} variant={activeProductType.name === p.name ? 'contained' : 'outlined'}
                            key={index}
                            sx={{ marginLeft: index > 0 ? 1 : 0 }}
                        >
                            {p.name}
                        </ProductTypeButton>
                    )
                })}
            </Box>
        </ProductTypesContainer>
    )
}

export default ProductTypes