import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
