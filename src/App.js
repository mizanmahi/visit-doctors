import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthContextProvider from './context/AuthContextProvider/AuthContextProvider';
import ProtectedRoute from './pages/Shared/ProtectedRoute';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
   return (
      <div className='App'>
         <AuthContextProvider>
            <Router>
               <Switch>
                  <Route exact path='/'>
                     <Home />
                  </Route>
                  <Route exact path='/home'>
                     <Home />
                  </Route>
                  <ProtectedRoute exact path='/appointment'>
                     <Appointment />
                  </ProtectedRoute>
                  <ProtectedRoute exact path='/dashboard'>
                     <Dashboard />
                  </ProtectedRoute>
                  <Route exact path='/login'>
                     <Login />
                  </Route>
                  <Route exact path='/register'>
                     <Register />
                  </Route>
               </Switch>
            </Router>
         </AuthContextProvider>
      </div>
   );
}

export default App;
