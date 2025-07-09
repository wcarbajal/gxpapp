export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <p className="text-base font-semibold text-indigo-600">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Página no encontrada</h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Regresar al inicio</a>
        <a href="#" className="text-sm font-semibold text-gray-900">Contactar con soporte técnico <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  );
};