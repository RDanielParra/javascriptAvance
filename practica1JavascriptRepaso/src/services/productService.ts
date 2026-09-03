import type Product from '../models/product.ts';

export async function getProductos(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  const productosFiltrados: Product[] = data.products.map((e: any) => ({
    title: e.title,
    price: e.price,
    discountPercentage: e.discountPercentage,
    description: e.description,
    category: e.category,
    stock: e.stock,
    rating: e.rating,
  }));

  return productosFiltrados;
}

export async function candidatosPromocion(){
  let products = await getProductos()

  let productosTratados = products.filter(e => e.rating >= 4.5)
  productosTratados = products.filter(e => e.stock > 10)
  let productosFormateados = productosTratados.map(e => ({
    Nombre: e.title,
    Precio: e.price,
    Stock: e.stock,
    Rating: e.rating,
  }))
  console.log(`=== PRODUCTOS CANDIDATOS PARA PROMOCION === \n`)
  console.log(productosFormateados)
}

export async function valorInventario() {
  let products = await getProductos()
  let valorTotalIventario: number = 0
  products.forEach(e => {
    valorTotalIventario += e.price * e.stock
  })
  console.log(`=== VALOR TOTAL DEL INVENTARIO === \n`)
  console.log(`Valor total del Inventario: ${valorTotalIventario.toFixed(2)}`)
}

export async function precioDescuentos() {
  let products = await getProductos()
  let productosConDescuento = products.map(e => ({
    NombreDelProducto: e.title,
    PrecioOriginal: e.price,
    PorcentajeDescuento: e.discountPercentage,
    PrecioFinal: (e.price - (e.price * e.discountPercentage / 100)).toFixed(2)
  }))

  console.log(`=== PRODUCTOS CANDIDATOS PARA PROMOCION === \n`)
  console.log(productosConDescuento)
}

export async function productosCategoria() {
  let products = await getProductos()

  const conteoPorCategoria = products.reduce((acc, producto) => {
  const cat = producto.category;
  acc[cat] = (acc[cat] || 0) + 1;
  return acc;
  }, {} as Record<string, number>);

  console.log(`=== PRODUCTOS POR CATEGORIA === \n`)
  console.log(conteoPorCategoria);
}