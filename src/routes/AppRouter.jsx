import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import Cart from '../layout/Cart'
import ProductItem from '../layout/ProductItem'
import Heart from '../layout/Heart'
import Account from '../layout/Account'
import Payment from '../layout/Payment'
import Shipment from '../layout/Shipment'
import Order from '../layout/Order'
import AdminHome from '../admin/AdminHome'
import AdminMenu from '../admin/AdminMenu'
import AdminManage from '../admin/AdminManage'
import AdminMProduct from '../admin/AdminMProduct'
import AdminPayment from '../admin/AdminPayment'
import AdminReport from '../admin/AdminReport'
import AdminEdit from '../admin/AdminEdit'
import AddProduct from '../admin/AddProduct'

const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />},
      // { path: '/login', element: <LoginForm />},
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <> <UserHome /> <ProductItem/> </>},
      { path: '/new', element: <p>New Todo Form</p>},
      { path: '/cart', element: <Cart/>},
      { path: '/product', element: <ProductItem/>},
      { path: '/heart', element: <Heart/>},
      { path: '/account', element: <Account/>},
      { path: '/payment', element: <Payment/>},
      { path: '/shipment', element: <Shipment/>},
      { path: '/order', element: <Order/>},
    ]
     }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header/>
      <Outlet />
    </>,
    children: [
      { index: true, element: <> <AdminMenu/> <UserHome/> <ProductItem/> </> },
      { path: '/', element: <LoginForm/> },
      { path: '/register', element: <RegisterForm/> },
      { path: '/adminhome', element: <AdminHome/> },
      { path: '/manage', element: <> <AdminMenu/> <AdminManage/> </> },
      { path: '/mproduct', element: <> <AdminMenu/> <AdminMProduct/> </> },
      { path: '/adminpayment', element: <> <AdminMenu/> <AdminPayment/> </> },
      { path: '/report', element: <> <AdminMenu/> <AdminReport/> </> },
      { path: '/edit', element: <> <AdminMenu/> <AdminEdit/> </> },
      { path: '/add', element: <> <AdminMenu/> <AddProduct/> </> },
      { path: '/product', element: <ProductItem/> },
      { path: '/adminmenu', element: <AdminMenu/> },
      { path: '/account', element: <Account/> },
      { path: '/cart', element: <Cart/> },
      { path: '/heart', element: <Heart/> },
      { path: '/payment', element: <Payment/>},
      { path: '/shipment', element: <Shipment/>},
      { path: '/order', element: <Order/>},
    ]
  }
])


export default function AppRouter() {
  const { user } = useAuth()
  const finalRouter = !user?.id ? guestRouter : user.role === 'ADMIN' ? adminRouter : userRouter;
  return (
    <>
      <RouterProvider router={finalRouter} />
    </>
  )
}

// export default function AppRouter() {
//   const {user} = useAuth()
//   const finalRouter = user?.id ? userRouter : guestRouter
//   return (
//     <RouterProvider router={finalRouter} />
//   )
// }
