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
  it('renders the cart information', () => {
    renderWithProviders(<Header />);

    const itemsText = screen.getByText('Items: 0');
    const totalText = screen.getByText('Total: $0.00');

    expect(itemsText).toBeInTheDocument();
    expect(totalText).toBeInTheDocument();
  });
});
