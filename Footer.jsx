import './Footer.css';

function Footer() {
  return (
    <footer className="footer" >
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Gaurav Mate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
