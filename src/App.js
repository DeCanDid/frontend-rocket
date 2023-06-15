import {  Routes, Route,  } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
// import '../src/index.css'
// import '../src/App.css'
import Privacy from './components/Privacy'
import Testimony from './components/Testimony'
import ForgottenPassword from './ForgottenPassword';
import Landing from './landingpage/Landing';
import SideNav from './components/SideNav.js'
import Dashboard from './components/Dashboard.js'
import DefaultLayout from './layouts/DefaultLayout.js'
import Deposits from './components/Deposits.js'
import Nav from './components/Nav.js'
import PaymentButton from './components/PaymentButton.js'
import Navbar from './landingpage/Navbar';

function App() {
  // const Navigate = useNavigate()
  return (
    <>
      <Routes> 
        {/* <Route path='*' element={<Navigate to="/home" />} /> */}
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset' element={<ForgottenPassword />} />
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/deposits' element={<Deposits />} />
        <Route path='*' element="No page" />
        <Route path='/testimony' element={<Testimony />} />
        <Route path='/privacy-policy' element={<Privacy />} />
       
      </Routes>
     
    </>
  );
}
export default App;