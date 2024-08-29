export interface ProductListProps {
    products: Product[];
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface ProductItemProps {
    product: Product,
    addToCart: (product: Product) => void
}

export interface SelectProps {
    setSortOption: (value: string) => void,
    sortOption: string
}

export interface SearchProps {
    searchQuery: string
    setSearchQuery: (value: string) => void,
}

export interface ClientProviderProps {
    children: React.ReactNode;
  }