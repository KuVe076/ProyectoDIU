import React from 'react';
import '../stylesheets/footer/footer.scss'
import logo from '../assets/logo.png'; // Reemplaza con la ruta a tu imagen

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={logo} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;