import ProductCard from './ProductCard'
import { ProductsContainer } from './ProductComponents'
import { ProductSkeleton } from '../productDetails/fragments/ProductDetailsComponent'


interface ProductContainerProps {
    products: Array<{ id: string, name: string; dateCreated: string; image: string; price: number; category: string; }>;
    loading: Boolean;
}

const Products = (props: ProductContainerProps) => {
    const { products, loading } = props;

    // const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <ProductsContainer>    
            { loading ? [1,2,3].map(e => { return ( <ProductSkeleton width="30%" key={e}/> ) }) : products.map((p) => {
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
            }) }
        </ProductsContainer>
    )
}

export default Products