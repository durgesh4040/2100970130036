import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./Component/ProductList";
import AllProductsPage from "./Component/AllProductsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/product" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
