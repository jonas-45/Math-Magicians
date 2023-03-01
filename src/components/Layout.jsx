import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
