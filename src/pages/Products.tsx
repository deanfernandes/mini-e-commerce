import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

async function fetchProducts(): Promise<Product[]>{
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return response.data;
}

function Products() {
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
    const [searchParams, setSearchParams] = useSearchParams();
    const categories = Array.from(new Set(products.map(p => p.category))).sort();
    const filterCategory = searchParams.get('category');
    const filteredProducts = filterCategory
    ? products.filter(p => p.category === filterCategory)
    : products;

    const handleClick = (category: string) => {
        setSearchParams({ category });
    }

    const clearFilter = () => {
        setSearchParams({});
    }

    if (loading) return (
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading products...</span>
    </div>
    )
    if (error) return <div>{error}</div>;

    return (
        <div className='container'>
            <div className="row">
                {filterCategory ? 
                <div className="col-auto mb-3">
                    <button className='btn btn-danger' onClick={clearFilter}>Clear filter</button> 
                </div>
                : null}

                {categories.map((c, i) => (
                    <div key={i} className="col-auto mb-3">
                        <button className='btn btn-info' onClick={()=>handleClick(c)}>{c}</button>
                    </div>
                ))}
            </div>
            <div className='row'>
                {filteredProducts.map((p) => (
                <div key={p.id} className="col-6">
                    <ProductCard product={p} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Products;