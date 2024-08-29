import React from 'react'
import Product from './components/Product'
import Header from './components/Header'
import { fetchProducts } from '@/service'
import Head from 'next/head'

export default async function Home() {
  const products = await fetchProducts()

  return (
    <>
      <Head>
        <title>Product Listing</title>
        <meta name="description" content="E-commerce product listing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center pt-8">Product Listing</h1>
        <Product products={products} />
      </main>
    </>
  )
}

