import './style.css'
import { candidatosPromocion, precioDescuentos, productosCategoria, valorInventario } from './services/productService'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`

candidatosPromocion()
valorInventario()
precioDescuentos()
productosCategoria()




