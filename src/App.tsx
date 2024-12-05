import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Products from './pages/Products';
import CreateProducts from './pages/CreateProducts';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/create-products" element={<CreateProducts />}></Route>
          <Route></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
