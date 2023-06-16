import cpl from '/cpl.png';
import './logo.css';

function Logo() {
  return (
    <div className="logo-container">
      <img className="logo-image" src={cpl} alt="cpl logo" />
      <h1 className='logo-text'>OURFLIX</h1>
    </div>
  );
}

export default Logo;