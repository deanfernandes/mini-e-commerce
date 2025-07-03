import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Product } from '../types/product';

type FavoritesProps = {
    products: Product[],
}

function Favorites({products}: FavoritesProps) {
    const favoriteIds = useSelector((state: RootState) => state.favorites.favoriteIds);

    return(
        <div>
            <h1>My Favorites:</h1>
            {favoriteIds.length === 0 ? 'You have no favorites :('
            : favoriteIds.map((id: number) => {
                return <p key={id}>{id}</p>;
            })}
        </div>
    )
}

export default Favorites;