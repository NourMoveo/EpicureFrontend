// Footer.tsx

import "./Footer.scss";

/**
 * Component representing the footer section of the website.
 * Contains links to various pages of the website.
 */
const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <div className='footer-items'>
          <div className="footer-item"> Contact Us </div>
          <div className="footer-item"> Term of Use </div>
          <div className="footer-item"> Privacy Policy </div>
        </div>
      </footer>
      <div className='under-footer'></div>
    </>
  );
};

export default Footer;
