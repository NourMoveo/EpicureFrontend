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
        <div className='footer-links'>
          <div className="footer-link"> Contact Us </div>
          <div className="footer-link"> Term of Use </div>
          <div className="footer-link"> Privacy Policy </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
