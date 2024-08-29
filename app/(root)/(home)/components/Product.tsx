'use client'
import React, { useState, useMemo, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';
import type { Product, ProductListProps } from '@/utils/types';
import ProductItem from './ProductItem';
import Search from './Search';
import Select from './Select';

const PRODUCTS_PER_PAGE = 10;

export default function Product({ products }: Readonly<ProductListProps>) {
  const dispatch = useDispatch();

  const [visibleProducts, setVisibleProducts] = useState<number>(PRODUCTS_PER_PAGE);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('price');

  const filteredProducts = useMemo(() => {
    return products
      .filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => (sortOption === 'price' ? a.price - b.price : b.rating.rate - a.rating.rate));
  }, [products, searchQuery, sortOption]);

  const loadMore = useCallback(() => {
    setVisibleProducts(prev => prev + PRODUCTS_PER_PAGE);
  }, []);

  const addToCart = useCallback((product: Product) => {
    dispatch(addItem(product));
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Select setSortOption={setSortOption} sortOption={sortOption} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleProducts).map(product => (
          <ProductItem product={product} addToCart={addToCart} key={product.id} />
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <div className='flex justify-center'>
          <button
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}
