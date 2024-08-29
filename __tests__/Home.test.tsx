// __tests__/Home.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Product from '@/app/(root)/(home)/components/Product';

const mockProducts = [
  {
    id: 1,
    title: 'Test Product 1',
    description: 'This is a description of Test Product 1',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    rating: { rate: 4.5, count: 10 },
  },
  {
    id: 2,
    title: 'Test Product 2',
    description: 'This is a description of Test Product 2',
    price: 49.99,
    image: 'https://via.placeholder.com/150',
    rating: { rate: 3.8, count: 20 },
  },
  // Add more mock products as needed
];

const renderWithProviders = (component: React.ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('Home Page', () => {
  it('renders product listing', () => {
    renderWithProviders(<Product products={mockProducts} />);

    const product1 = screen.getByText('Test Product 1');
    const product2 = screen.getByText('Test Product 2');

    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });

  it('displays correct product information', () => {
    renderWithProviders(<Product products={mockProducts} />);

    const product1Price = screen.getByText('$99.99');
    const product2Rating = screen.getByText('Rating: 3.8 (20)');

    expect(product1Price).toBeInTheDocument();
    expect(product2Rating).toBeInTheDocument();
  });

  it('filters products by search query', () => {
    renderWithProviders(<Product products={mockProducts} />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    fireEvent.change(searchInput, { target: { value: 'Product 1' } });

    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
  });

  it('adds a product to the cart', () => {
    renderWithProviders(<Product products={mockProducts} />);

    const addToCartButton = screen.getAllByText('Add to Cart')[0];
    fireEvent.click(addToCartButton);

    const cartItems = screen.getByText('Items: 1');
    const cartTotal = screen.getByText('Total: $99.99');

    expect(cartItems).toBeInTheDocument();
    expect(cartTotal).toBeInTheDocument();
  });
});
