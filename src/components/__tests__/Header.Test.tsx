import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MemoryRouter } from 'react-router';
import { screen } from '@testing-library/react';

describe("header component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
  });

  afterEach(() => {
  });

  test("renders heading and nav bar", ()=> {
    const heading = screen.getByRole('heading', { name: /mini e-commerce/i });
    expect(heading).toBeInTheDocument();

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  test("renders nav links with correct text", () => {
    expect(screen.getByRole('link', { name: /Home/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Products/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Favorites/ })).toBeInTheDocument();
  })

  test("nav link is active when route matches", ()=> {
    const homeLink = screen.getByRole("link", {name: /Home/});
    expect(homeLink).toHaveClass("active");
  })
});