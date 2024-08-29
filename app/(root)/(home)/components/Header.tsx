'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Link from 'next/link';

const Header: React.FC = () => {
  const { totalQuantity, totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
          E-Commerce
        </Link>
        <div className="flex space-x-4">
          <p className="flex items-center" data-testid="cart-items">
            <span className="mr-2">Items:</span>
            <span className="font-semibold">{totalQuantity}</span>
          </p>
          <p className="flex items-center" data-testid="cart-total">
            <span className="mr-2">Total:</span>
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
