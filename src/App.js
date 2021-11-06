import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ManageBooking from './Pages/ManageBooking/ManageBooking';
import MyBooking from './Pages/MyBooking/MyBooking';
import PrivateRoute from './Pages/PrivateRouter/PrivateRoute';
import Service from './Pages/Service/Service';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
           <Header></Header>
            <Switch>
              <Route exact path='/'>
                   <Home></Home>
              </Route>
              <Route path='/home'>
                   <Home></Home>
              </Route>
              <Route path='/about'>
                   <AboutUs></AboutUs>
              </Route>
              <Route path='/service'>
                   <Service></Service>
              </Route>
              <PrivateRoute path='/booking/:id'>
                   <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path='/managebooking'>
                   <ManageBooking></ManageBooking>
              </PrivateRoute>
              <Route path='/mybooking'>
                   <MyBooking></MyBooking>
              </Route>
              <Route path='/login'>
                   <Login></Login>
              </Route>
            </Switch>
            <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
