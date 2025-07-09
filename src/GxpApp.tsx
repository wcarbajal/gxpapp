import { AuthProvider } from './auth/AuthConext';
import './GxpApp.css';

import { AppRouter } from './router/AppRouter';

function GxpApp() {


  return (
    <AuthProvider>

      <AppRouter />
    </AuthProvider>

  );
}

export default GxpApp;
