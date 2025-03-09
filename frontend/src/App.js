import "./App.css";
import HomeScreen from "./screens/HomeScreen"
import { BrowserRouter,Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen"

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Couvoiturage
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/product/:id" element={<ProductScreen />} /> 
        </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}
export default App;


