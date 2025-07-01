import { Outlet } from 'react-router'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../types/product';

async function fetchProducts(): Promise<Product[]>{
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return response.data;
}

function ProductsLayout() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(()=> {
        setLoading(true);
        (async () => {
        try {
            const data = await fetchProducts();
            setProducts(data);
        }
        catch (err) {
            console.error(err);
            setError('Failed to fetch products');
        }
        finally {
            setLoading(false);
        }
        })();  
    }, [])

    if (loading) return (
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading products...</span>
    </div>
    )
    if (error) return <div>{error}</div>;

    return (
    <>
        <Outlet context={{products}}/>
    </>
    )
}

export default ProductsLayout;