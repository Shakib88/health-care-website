import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Description from './Pages/Description/Description';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Dentists from './Pages/Dentists/Dentists';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';







function App() {
  return (
    <div className ="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/details/:servicsId">
            <Description></Description>
          </PrivateRoute>

          <PrivateRoute path="/dentist">
            <Dentists></Dentists>
          </PrivateRoute>

          <Route path="/about">
              <About></About>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          

          <Route path="*">
            <NotFound></NotFound>
          </Route>

          

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
