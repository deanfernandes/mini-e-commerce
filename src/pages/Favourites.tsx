import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Product } from '../types/product';
import { useMemo } from 'react';
import FavoriteProductCard from '../components/FavoriteProductCard';

type FavoritesProps = {
    products: Product[],
}

function Favorites({products}: FavoritesProps) {
    const favoriteIds = useSelector((state: RootState) => state.favorites.favoriteIds);

    const productsById = useMemo(() => {
        const map = new Map<number, Product>();
        products.forEach(p => map.set(p.id, p));
        return map;
    }, [products]);

    return(
        <div>
            <h1>My Favorites:</h1>
            {favoriteIds.length === 0 ? 'You have no favorites :(' : favoriteIds.map(id => {
                const product = productsById.get(id);
                if(!product) return null;

                return <FavoriteProductCard key={id} product={product} />;
            })}
        </div>
    )
}

export default Favorites;