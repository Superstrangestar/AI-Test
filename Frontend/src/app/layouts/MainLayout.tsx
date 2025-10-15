import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 md:py-8">
      <div className="container mx-auto px-3 md:px-4 max-w-7xl">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
