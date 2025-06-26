//import { products } from './mocks/products.json'
import { products as initialProducts } from './mocks/products_new.json'
import { Products } from "./components/Products"
import { Cart } from "./components/Cart"
import { Footer } from "./components/Footer"
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { useState } from 'react'
import { CartProvider } from './context/cart'



function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
