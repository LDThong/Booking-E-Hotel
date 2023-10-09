import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
