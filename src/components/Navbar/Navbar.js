import { Link } from "react-router-dom";




const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">home</Link>
      </nav>

      <nav>
        <Link to="/city/:id">about</Link>
      </nav>
    </>
  );
};

export default NavBar;