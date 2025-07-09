import React, { useCallback } from 'react'
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import type { Authorization } from '@/interfaces/auth/Authorization';

// Removed incorrect import of Authorization
// Removed incorrect import of initialState



interface AuthContextProps {
  auth: Authorization;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register:  ( nombre: string, email: string, password: string ) => Promise<void>;
  verificaToken: () => Promise<true |void>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

const initialState: Authorization = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null
};

export const AuthProvider: React.FC<React.PropsWithChildren<object>> = ({ children }) => {

  const [auth, setAuth] = React.useState<Authorization>(initialState);

  const login = async (email: string, password: string) => {
    const respuesta = await fetchSinToken('login', { email, password }, 'POST');

    if (respuesta.ok) {
      localStorage.setItem('token', respuesta.token);
      const { usuario } = respuesta;

      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      });
    }
  };

  const register = async ( nombre: string, email: string, password: string ) => {
  
      const respuesta = await fetchSinToken( 'login/new', { nombre, email, password }, 'POST' );
  
      if ( respuesta.ok ) {
  
        localStorage.setItem( 'token', respuesta.token );
        const { usuario } = respuesta;
  
        setAuth( {
          uid: usuario.uid,
          checking: false,
          logged: true,
          name: usuario.nombre,
          email: usuario.email
        } );
      }
  
      return respuesta;
  
  
    };
  
    const verificaToken = useCallback( async () => {
  
      const token = localStorage.getItem( 'token' );
  
      if ( !token ) {
        return setAuth( {
          uid: null,
          checking: false,
          logged: false,
          name: null,
          email: null
        } );
      }
       const resp = await fetchConToken( 'login/renew', {}, 'GET' );
  
       if (resp.ok) {
        localStorage.setItem( 'token', resp.token );
        const { usuario } = resp;
  
        setAuth( {
          uid: usuario.uid,
          checking: false,
          logged: true,
          name: usuario.nombre,
          email: usuario.email
        } );
        
        return true
       }else {
      return setAuth( {
          uid: null,
          checking: false,    
          logged: false,
          name: null,
          email: null
        } );
       }    
      
  
    }, [] );
  
    const logout = () => {
      localStorage.removeItem( 'token' );
      setAuth( {
        uid: null,
        checking: false,
        logged: false,
        email: null,
        name: null
        
      } );
  
    };
  


  return (
    <AuthContext.Provider value={{ auth, login, logout, register, verificaToken }}>
      {children}
    </AuthContext.Provider>
  );
};