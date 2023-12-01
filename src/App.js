import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
import RoomDetail from './components/Home/RoomDetail/RoomDetail';
import Booking from './components/Home/Booking/Booking';
import BookingDetails from './components/Home/Booking/BookingConfirm';
import PersonalManageBooking from './components/Home/Booking/PersonalManageBooking';
import Verify from './components/Home/Verify';

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
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
