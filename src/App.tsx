import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './pages/Favourites';
import { Product } from './types/product';
import axios from 'axios';
import { useEffect, useState } from 'react';

async function fetchProducts(): Promise<Product[]>{
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return response.data;
}

function App() {
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
            setError('Failed to fetch products.');
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
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products'>
          <Route index  element={<Products products={products}/>}/>
          <Route path=':id' element={<ProductDetails products={products}/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='favorites' element={<Favorites products={products}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
