import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>© 2025 Jayadhwani Ministries. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/share/16586X33oC/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/jayadhwani3?igsh=MWRpYTcwOHJ4ZGZ1aw==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/channel/UCjoUH7HwRAl2r8mB22VvANQ" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
