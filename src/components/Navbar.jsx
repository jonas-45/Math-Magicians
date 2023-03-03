import { NavLink } from 'react-router-dom';
import styles from '../styles/nav.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => (
  <nav className={styles.nav}>
    <h1>Maths Magicians</h1>
    <ul>
      {links.map((link) => (
        <>
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
          <div className="nav-item">{link.text !== 'Quote' ? ' |' : ''}</div>
        </>
      ))}
    </ul>
  </nav>
);

export default Navbar;
