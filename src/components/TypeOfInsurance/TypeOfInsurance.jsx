import './TypeOfInsurance.css'
import img1 from '../../assets/images-type-insurance/img1.png'
import img2 from '../../assets/images-type-insurance/img2.png'
import img3 from '../../assets/images-type-insurance/img3.png'
import img4 from '../../assets/images-type-insurance/img4.svg'

const TypeOfInsurance = () => {
  return (
    <div className='container' id='auto'>
      <h2 className="tupeIns">Виды страхования</h2>
      {/* <div className="filterBar">
        <div className="auto">Авто</div>
      </div> */}
      <div className="tupeIns-content-second tupeIns-content-second2">
        <div className="tupeIns-left">
          <h3>КАСКО по частям</h3>
          <p>Страхование по частям, оптимизируйте под потребности вашего автомобиля</p>
          <p>от 20 000 UZS</p>
          <button>Оформить</button>
        </div>
        <div className="tupeIns-right">
          <img src={img4} alt="" />
        </div>
      </div>
      <div className="tupeIns-content-first">
        <div className="tupeIns-item">
          <h3>VIP ОСАГО</h3>
          <p>Быстрый расчет стоимости полиса. Простое оформление</p>
          <img src={img1} alt="" />
          <p className='price'>от 168 000 UZS</p>
          <button>Оформить</button>
        </div>
        <div className="tupeIns-item">
          <h3>Защита авто (КАСКО)</h3>
          <p>100% - восстановим вашу машину в любом случае</p>
          <img src={img2} alt="" />
          <p className='price'>от 400 000 UZS</p>
          <button>Оформить</button>
        </div>
      </div>
      <div className="tupeIns-content-second">
        <div className="tupeIns-left">
          <h3>Месячный КАСКО</h3>
          <p>Оплачивайте ежемесячно и мы позаботимся о Вашей машине</p>
          <p>от 60 000 UZS</p>
          <button>Оформить</button>
        </div>
        <div className="tupeIns-right">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  ) // nsk, gos strah, ALMA INSURENS
}

export default TypeOfInsurance