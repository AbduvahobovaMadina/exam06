import React, {memo} from 'react'
import photo from '../../assets/photo5.png'
import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
import photo4 from '../../assets/photo4.png'
import './Catalog.scss'

const Catalog = () => {
  return (
    <div className='catalog container mx-auto'>
        <div className="container">
            <div className="catalog__box">
                <div className="catalog__card">
                    <div className="catalog__img">
                        <img src={photo} alt="" />
                    </div>
                    <div className="catalog__info">
                        <p className='catalog__title'>Best prices & offers</p>
                        <p className='catalog__order'>Orders $50 or more</p>
                    </div>
                </div>
                <div className="catalog__card">
                    <div className="catalog__img">
                        <img src={photo1} alt="" />
                    </div>
                    <div className="catalog__info">
                        <p className='catalog__title'>Free delivery</p>
                        <p className='catalog__order'>24/7 amazing services</p>
                    </div>
                </div>
                <div className="catalog__card">
                    <div className="catalog__img">
                        <img src={photo2} alt="" />
                    </div>
                    <div className="catalog__info">
                        <p className='catalog__title'>Great daily deal</p>
                        <p className='catalog__order'>When you sign up</p>
                    </div>
                </div>
                <div className="catalog__card">
                    <div className="catalog__img">
                        <img src={photo3} alt="" />
                    </div>
                    <div className="catalog__info">
                        <p className='catalog__title'>Wide assortment</p>
                        <p className='catalog__order'>Mega Discounts</p>
                    </div>
                </div>
                <div className="catalog__card">
                    <div className="catalog__img">
                        <img src={photo4} alt="" />
                    </div>
                    <div className="catalog__info">
                        <p className='catalog__title'>Easy returns</p>
                        <p className='catalog__order'>Within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo (Catalog)