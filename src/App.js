import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from './routes';

function App() {
  // Initialize the router and render the app shell.
  return <RouterProvider router={router} />;
}

export default App;
