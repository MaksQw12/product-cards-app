import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Header } from './components/header/Header';
import { Products } from './pages/Products';
import { CreateProducts } from './pages/CreateProducts';
import { DetailProduct } from './pages/DetailProduct';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/product-details');

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/products');
    }
  }, [location, navigate]);

  const routes = [
    { path: '/products', element: <Products /> },
    { path: '/create-products', element: <CreateProducts /> },
    { path: '/product-details/:id', element: <DetailProduct /> },
  ];

  return (
    <div className="app-wrapper">
      {!isDetailPage && <Header />}
      <main className="app-content">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
