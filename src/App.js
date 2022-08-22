import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import AllProducts from './pages/AllProducts/AllProducts';
import CategorizedProducts from './pages/CategorizedProducts/CategorizedProducts';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import Footer from './components/Footer/Footer';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route
          path="/products/category/:category"
          element={<CategorizedProducts />}
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
