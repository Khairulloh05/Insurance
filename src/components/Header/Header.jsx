import './Header.css'
import Logo from '../../assets/icons/logo3.png'
import burgerMenu from '../../assets/icons/burger-menu-svgrepo-com.svg'

const Header = () => {
  return (
    <div className="container">
      <div className="header-top">
        <div className="header-top-left">
          <button>Частным лицам</button>
          <button>Бизнесу</button>
          <button>Такафул</button>
          <button>Партнёрская программа</button>
        </div>
        <div className="header-top-right">
          {/* <img src={searchIcon} alt="" /> */}
          <button className='lang-btn'>RU</button>
          <button className='account'>Личный кабинет</button>
        </div>
      </div>
      <div className="header-bottom">
        <a href="#">
          <img src={Logo} alt="Logo Ali Insurance" className="header-bottom-left" />
        </a>
        <div className="header-bottom-center">
          <a href="#auto">
            <button>Авто</button>
          </a>
          <a href="#questions">
            <button>Вопросы</button>
          </a>
          <button>Путешествие</button>
          {/* <button>Здоровье</button> */}
        </div>
        <div className='header-bottom-right'>
          <button className='account account2'>Личный кабинет</button>
          <img className='burger-menu' src={burgerMenu} alt="" />
        </div>
        {/* <div className="header-bottom-right"></div> */}
      </div>
      <button className='account account3'>Личный кабинет</button>
    </div>
  );
};

export default Header;
