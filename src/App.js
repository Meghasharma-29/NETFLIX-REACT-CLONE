import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './Context/AuthContext';
import LogIn from './Pages/LogIn';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/account'
            element={
             
              <ProtectedRoute>  <Account /></ProtectedRoute>
            
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;