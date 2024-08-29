import React from 'react'
import Image from 'next/image'
import { ProductItemProps } from '@/utils/types'

export default function ProductItem({ product, addToCart }: Readonly<ProductItemProps>) {
  const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength
      ? `${description.substring(0, maxLength)}...`
      : description;
  };

  return (
    <div className="border p-4 rounded flex flex-col h-full">
      <div className="lg:max-w-[248px] lg:h-[218px] rounded-[12px] overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.title} 
          width={248} 
          height={218} 
          layout="responsive" 
          objectFit="cover" 
          className="rounded-[12px] transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h2 className="mt-4 font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-600 flex-grow">{truncateDescription(product.description, 100)}</p>
      <div className="mt-auto">
        <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <button
          className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded transition-colors duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
