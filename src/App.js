import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
import RoomDetail from './components/Home/RoomDetail/RoomDetail';
import Booking from './components/Home/Booking/Booking';

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
    path: '/home/booking/',
    element: <Booking />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
