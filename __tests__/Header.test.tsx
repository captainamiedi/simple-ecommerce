// __tests__/Header.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Header from '@/app/(root)/(home)/components/Header';

const renderWithProviders = (component: React.ReactElement) => {
    return render(<Provider store={store}>{component}</Provider>);
  };

describe('Header Component', () => {
  test('renders the correct text in the header', async () => {
    renderWithProviders(<Header />);
    
    // Use a more flexible matcher function for finding the text
    const itemsElement = await screen.findByTestId('cart-items');
    const totalElement = await screen.findByTestId('cart-total');
  
    // Check if the elements contain the expected text
    expect(itemsElement).toHaveTextContent(/Items:\s*0/i);
    expect(totalElement).toHaveTextContent(/Total:\s*\$0\.00/i);
  
    // Use assertions to ensure the elements are in the document
    expect(itemsElement).toBeInTheDocument();
    expect(totalElement).toBeInTheDocument();
  });
});
