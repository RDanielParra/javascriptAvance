import './style.css'
import { getProductos } from './services/productService'
import type Product from './models/product'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`
async function candidatosPromocion(){
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

async function valorInventario() {
  let products = await getProductos()
  let valorTotalIventario: number = 0
  products.forEach(e => {
    valorTotalIventario += e.price * e.stock
  })
  console.log(`=== VALOR TOTAL DEL INVENTARIO === \n`)
  console.log(`Valor total del Inventario: ${valorTotalIventario.toFixed(2)}`)
}

async function precioDescuentos() {
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

async function productosCategoria() {
  let products = await getProductos()

  const conteoPorCategoria = products.reduce((acc, producto) => {
  const cat = producto.category;
  acc[cat] = (acc[cat] || 0) + 1;
  return acc;
  }, {} as Record<string, number>);

  console.log(`=== PRODUCTOS POR CATEGORIA === \n`)
  console.log(conteoPorCategoria);
}

candidatosPromocion()
valorInventario()
precioDescuentos()
productosCategoria()




