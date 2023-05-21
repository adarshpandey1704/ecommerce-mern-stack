import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserDashBoard from './pages/UserDashboard';
import AdminDashBoard from './pages/AdminRoutes/AdminDashboard';
import AdminCategory from './pages/AdminRoutes/AdminCategory';
import ProductDashboard from './pages/AdminRoutes/ProductDahboard';
import PrivateRoute from './auth/PrivateRoute';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
