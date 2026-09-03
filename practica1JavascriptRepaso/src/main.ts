import './style.css'
import { candidatosPromocion, getProductos, precioDescuentos, productosCategoria, valorInventario } from './services/productService'
import type Product from './models/product'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`

candidatosPromocion()
valorInventario()
precioDescuentos()
productosCategoria()




