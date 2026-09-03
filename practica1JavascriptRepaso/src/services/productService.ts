import type Product from '../models/product.ts';

export async function getProductos(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  const productosFiltrados: Product[] = data.products.map((item: any) => ({
    title: item.title,
    price: item.price,
    discountPercentage: item.discountPercentage,
    description: item.description,
    category: item.category,
    stock: item.stock,
    rating: item.rating,
  }));

  return productosFiltrados;
}