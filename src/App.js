import { ReactKeycloakProvider } from '@react-keycloak/web';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './helpers/PrivateRoute';
import keycloak from './keycloak';
import Homepage from './pages/Homepage';
import SecuredPage from './pages/SecuredPage';

function App() {
  return (
    <div className='container-fluid pe-0 ps-0'>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/secured' element={
              <PrivateRoute>
                <SecuredPage />
              </PrivateRoute>
            } />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
