import './Hero.css';
import homeImg from '../../assets/images-home/img3.jpg';

const Hero = () => {
  return (
    <div className="container">
    <div className="vip-osago-container">
      <div className="vip-osago-text">
        <h1>Онлайн VIP ОСАГО за 2 минуты
        </h1>
        <ul>
          <li>Покупайте без похода в офис</li>
          <li>Получите онлайн полис сразу на телефон</li>
          {/* <li>Отображается на всех планшетах инспекторов ДПС</li> */}
        </ul>
        <button className="vip-osago-button">Купить</button>
      </div>
      <img src={homeImg} alt="" className="vip-osago-image" />
    </div>
    </div>
  );
};

export default Hero;