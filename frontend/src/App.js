import data from './data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Hewale</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          <h1>Featured Products</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    0<p>{product.name}</p>
                  </a>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
