import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';
import Layout from './components/layout/Index';
import AllRoutes from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
   <>
    <ToastContainer
        position="top-center"
        autoClose={1500}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    <Layout>
        <AllRoutes />
      </Layout>
   </>
  );
}

export default App;
