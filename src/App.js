import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/layout/RootLayout"
import { JobProvider } from './context/jobContext';
import HomePage, { loader as jobsListLoader } from './pages/HomePage';
import JobsDetailsPage, { loader as jobDetailsLoader } from './pages/JobsDetailsPage';
import AddNewJobPage , {action as jobPostAction}from './pages/AddNewJobPage';

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />,
    children: [
      {
        index: true, element: <HomePage />, loader: jobsListLoader
      },
      {
        path: ":id", element: <JobsDetailsPage />, loader: jobDetailsLoader
      },
      {
        path: "add", element: <AddNewJobPage/>, action: jobPostAction
      }
    ]
  }
])

function App() {
  return (
    <JobProvider>
      <RouterProvider router={router} />
    </JobProvider>
  );
}

export default App;