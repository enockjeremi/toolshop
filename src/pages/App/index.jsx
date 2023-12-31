import { useRoutes, BrowserRouter } from 'react-router-dom';
import CartProvider from '../../context'
import './App.css'
import Home from '../Home'
import Account from '../Account'
import Orders from '../Orders'
import Order from '../Order'
import NotFound from '../NotFound'
import SingIn from '../SignIn'
import Navbar from '../../components/Navbar';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';



const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/account', element: <Account /> },
    { path: '/order', element: <Order /> },
    { path: '/orders', element: <Orders /> },
    { path: '/orders/last', element: <Order /> },
    { path: '/orders/:id', element: <Order /> },
    { path: '/sing-in', element: <SingIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
