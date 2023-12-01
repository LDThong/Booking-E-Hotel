import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
import RoomDetail from './components/Home/RoomDetail/RoomDetail';
import Booking from './components/Home/Booking/Booking';
import BookingDetails from './components/Home/Booking/BookingConfirm';

import PersonalManageBooking from './components/Home/Booking/PersonalManageBooking';
import Verify from './components/Home/Verify';
import Rooms from './components/Home/RoomDetail/Rooms';
import HomeAdmin from './components/Admin/HomeAdmin';
import ManagementCustomer from './components/Admin/ManagamentCustomer/ManagementCustomer';
import RoomTypes from './components/Admin/ManagementRoom/RoomTypes';
import ListBooking from './components/Admin/ManagementBooking/ListBooking';
import LoginAdmin from './components/Admin/LoginAdmin';
import Services from './components/Admin/ManagementServices/Services';
import Promotions from './components/Admin/ManagementPromotion/Promotions';
import Reports from './components/Admin/ManagementReport/Reports';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/room-detail/:id',
    element: <RoomDetail />
  },
  {
    path: '/home/booking',
    element: <Booking />
  },
  {
    path: '/home/confirm',
    element: <BookingDetails />
  },

  {
    path: '/home/mybooking',
    element: <PersonalManageBooking />
  },
  {
    path: '/verify/:id',
    element: <Verify />
  },
  /** --------------Admin------------ */
  {
    path: '/admin/',
    element: <LoginAdmin />
  },
  {
    path: '/admin/home/',
    element: <HomeAdmin />
  },
  {
    path: '/admin/managementcustomers/',
    element: <ManagementCustomer />
  },
  {
    path: '/admin/roomtypes/',
    element: <RoomTypes />
  },
  {
    path: '/admin/listbookings/',
    element: <ListBooking />
  },
  {
    path: '/admin/services/',
    element: <Services />
  },
  {
    path: '/admin/promotions/',
    element: <Promotions />
  },
  {
    path: '/admin/reports/',
    element: <Reports />
  },
  {
    path: '/rooms/',
    element: <Rooms />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
