import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import { Product } from '../../types/product';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from '../../app/store';

const sampleProduct: Product = {
    id: 42,
    title: "Straw Hat",
    price: 5.99,
    description: `Monkey D. Luffy's straw hat is the main symbol of the entire series and is the origin of his nickname "Straw Hat Luffy."`,
    category: "men's clothing",
    image: "https://static.wikia.nocookie.net/onepiece/images/b/b2/Straw_Hat.png/revision/latest/scale-to-width-down/1000?cb=20231119104349",
}

describe("product card component", ()=> {
    beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductCard product={sampleProduct} />
        </MemoryRouter>
      </Provider>
    );
  });

    test("renders product img", ()=> {
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", sampleProduct.image);
        expect(img).toHaveAccessibleName("product logo");
    })

    test("renders view details link with valid href", ()=>{
        const viewDetailsLink = screen.getByRole("link", {name: 'View details'});
        expect(viewDetailsLink).toBeInTheDocument();
        expect(viewDetailsLink).toHaveAttribute("href", `/${sampleProduct.id}`);
    })
})