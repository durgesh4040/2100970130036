import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./Component/ProductList";
import AllProductsPage from "./Component/AllProductsPage";
import Assignment1Calculator from "./Component/Assignment1Calculator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/cal" element={<Assignment1Calculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
