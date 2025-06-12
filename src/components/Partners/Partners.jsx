import './Partners.css'
import img1 from '../../assets/partners-img/img2.svg'
import img2 from '../../assets/partners-img/img3.svg'
import img3 from '../../assets/partners-img/img5.png'

const Partners = () => {
  return (
    <div className='container'>
      <h2 className='partners-title'>Наши партнеры</h2>
      <div className="partners-content">
        <div className="partners-item"><img src={img1} alt="" /></div>
        <div className="partners-item"><img src={img2} alt="" /></div>
        <div className="partners-item"><img className='d' src={img3} alt="" /></div>
      </div>
    </div>
  )
}

export default Partners