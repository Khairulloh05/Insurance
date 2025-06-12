import './Advantages.css'
import React, { useState, useEffect } from 'react';
import slide1 from '../../assets/slide-img/slide1.png'
import slide2 from '../../assets/slide-img/slide2.png'
import slide3 from '../../assets/slide-img/slide3.png'

const slides = [
  {
    image: slide1, // замените на свой путь
    text: 'Быстрые выплаты, опережая конкурентов'
  },
  {
    image: slide2,
    text: 'Расширенное покрытие, вне конкуренции',
  },
  {
    image: slide3,
    text: 'Упрощенное оформление полисов'
  },
];

const Advantages = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <div className="advantages-content">
        <div className="advantages-item">
          <h3>KG A++</h3>
          <p>Высший рейтинг надежности</p>
        </div>
        <div className="advantages-item">
          <h3>100 000</h3>
          <p>Клиентов оформили полис</p>
        </div>
        <div className="advantages-item">
          <h3>KG AAA</h3>
          <p>Рейтинг обслуживания колл-центра</p>
        </div>
      </div>

      <div className="card-white">
        <div className="slider-card">
          <img src={slides[current].image} alt="Slide" className="slider-image"/>
          <div className="slider-caption">
            {slides[current].text}
          </div>
          <div className="slider-controls">
            <button onClick={() => setCurrent((current - 1 + slides.length) %  slides.length)} className="slider-arrow">▲</button>
            <div className="slider-scrollbar">
              <div className="slider-scroll-indicator" style={{ top: `${(100 / slides.length) * current}%` }}></div>
            </div>
            <button onClick={() => setCurrent((current + 1) % slides.length)}  className="slider-arrow">▼</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages