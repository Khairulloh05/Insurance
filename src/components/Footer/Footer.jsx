import './Footer.css'
import email from '../../assets/icons/social-icons/email2.svg'
import location from '../../assets/icons/social-icons/location2.svg'
import teleagram from '../../assets/icons/social-icons/teleagram.svg'
import instagram from '../../assets/icons/social-icons/instagram.svg'
import whatsapp from '../../assets/icons/social-icons/whatsap.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="footer-content">
        <div className="footer-item pointer">
          <img src={email} alt="" />
          <p>navigarant@gmail.com</p>
        </div>
        <div className="footer-item">
          <img src={location} alt="" />
          <p>Кыргызстан, Жалал-Абад, ул Тумонбай Байзаков 184B</p>
        </div>
        <div className="footer-item pointer icon-block">
          <img src={teleagram} alt="" />
          <img src={instagram} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
