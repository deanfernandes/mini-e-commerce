import { useParams } from 'react-router';
import { Product } from '../types/product';
import { RootState } from '../app/store';
import ProductDetailsCard from '../components/ProductDetailsCard';
import { useSelector } from 'react-redux';

type ProductDetailsProps = {
    products: Product[],
}

function ProductDetails({products}: ProductDetailsProps) {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const favoriteIds = useSelector((state: RootState) => state.favorites.favoriteIds);
    const productId = Number(id);

    if(!product) return <p>Product not found.</p>

    return (
        <ProductDetailsCard product={product} isFavorite={!isNaN(productId) && favoriteIds.includes(productId)}/>
    )
}

export default ProductDetails;