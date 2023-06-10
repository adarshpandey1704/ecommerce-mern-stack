import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserDashBoard from './pages/UserDashboard';
import AdminDashBoard from './pages/AdminRoutes/AdminDashboard';
import AdminCategory from './pages/AdminRoutes/AdminCategory';
import ProductDashboard from './pages/AdminRoutes/ProductDahboard';
import GuestDashboard from './pages/GuestDashboard';
import ProductDetails from './pages/ProductDetails';
import AddToCart from './pages/AddToCart';
import PrivateRoute from './auth/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';

// redux thunk to handle our apis and it updates the correponding reducers on the basis of what you have dispatched
// which is not comming from backend server.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="guest-dashboard" element={<GuestDashboard />} />
        <Route path="product-details/:product_id" element={<ProductDetails />} />
        {/* private routes */}
        <Route
          path="/user-dashboard"
          element={
            <PrivateRoute>
              <UserDashBoard />
            </PrivateRoute>
          }
        />
        {/* admin routes */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminDashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/category"
          element={
            <PrivateRoute>
              <AdminCategory />
            </PrivateRoute>
          }
        />
        <Route
          path="/product-dashboard"
          element={
            <PrivateRoute>
              <ProductDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart/:id"
          element={
            <PrivateRoute>
              <AddToCart />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
