import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/employees">Employees</Link> | {' '}
      <Link to="/organization">Organization</Link>
    </nav>
  );
}

export default Navbar;