import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    console.log('Tombol Sign In diklik!');
    window.location.href = '/Daftar';
  };

  const handleLogInClick = () => {
    console.log('Tombol Log In diklik!');
    window.location.href = '/Login';
  };

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <nav className="navbarawal">
        <div className="navbar-leftawal">
          <div className="logoawal">
            <img src="/logo/logonavbar.png" alt="ArtsyMe Logo" />
            <span className="artsy-text">ArtsyMe</span>
          </div>
          <Link to="/dashboard" className="nav-linkawal" style={{ marginLeft: '20px' }}>Dashboard</Link>
          <Link to="/explore" className="nav-linkawal" style={{ marginLeft: '20px' }}>Explore</Link>

        </div>
        <div className="navbar-rightawal">
          <Link to="/about" className="nav-linkawal" style={{ marginRight: '25px' }}>About</Link>
          <button className="nav-buttonawal" onClick={handleSignInClick}> Sign In </button>
          <button className="nav-buttonawal" onClick={handleLogInClick}> Log In </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
