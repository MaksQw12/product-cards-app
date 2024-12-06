import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/header/Header';
import Products from './pages/Products';
import CreateProducts from './pages/CreateProducts';
import DetailProduct from './pages/DetailProduct';

function App() {
  const location = useLocation();

  const isDetailPage = location.pathname.startsWith('/product-details');
  return (
    <div className="app-wrapper">
      {!isDetailPage && <Header />}
      <main className="app-content">
        <Routes>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/create-products" element={<CreateProducts />}></Route>
          <Route path="/product-details/:id" element={<DetailProduct />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
