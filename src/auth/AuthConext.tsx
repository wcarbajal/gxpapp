import React from 'react'
import { fetchSinToken } from '../helpers/fetch';

export const AuthContext = React.createContext(null)

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

  const [auth, setAuth] = React.useState(null)

   const login = async ( email: string, password: string ) => {
  
      const respuesta = await fetchSinToken( 'login', { email, password }, 'POST' );
  
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
      return respuesta.ok;
  
  
    };

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}