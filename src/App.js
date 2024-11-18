import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Carousel from './components/Carousel';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import ProtectedRoute from './components/ProtectedRoute';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import { CartProvider } from './context/CartContext'; // Importar el CartProvider

function App() {
    const [userRole, setUserRole] = useState(null);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const logout = () => {
        setUserRole(null);
    };

    return (
        <Router>
            <CartProvider> {/* Proveer el contexto del carrito */}
                {userRole === null && (
                    <>
                        <Navbar setUserRole={setUserRole} setIsAuthModalOpen={setIsAuthModalOpen} />
                        <Carousel />
                    </>
                )}

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute userRole={userRole} requiredRole="admin">
                                <AdminPage logout={logout} />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/employee"
                        element={
                            <ProtectedRoute userRole={userRole} requiredRole="employee">
                                <EmployeePage logout={logout} />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/admin/users" element={<UsersPage />} />
                    <Route path="/admin/products" element={<ProductsPage />} />
                    <Route path="/admin/orders" element={<OrdersPage />} />
                </Routes>

                <AuthModal open={isAuthModalOpen} handleClose={() => setIsAuthModalOpen(false)} setUserRole={setUserRole} />
                {userRole === null && <Footer />}
            </CartProvider>
        </Router>
    );
}

export default App;
