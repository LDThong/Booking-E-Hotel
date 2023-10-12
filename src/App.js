import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Register from './components/Login/Register';
import Login from './components/Login/Login';

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
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
