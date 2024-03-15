import React from 'react'
import './collection.css'
import { FaCaretRight } from "react-icons/fa6";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>, 
    prevArrow: <PrevArrow/>,
  };

const Collection = ({ list }) => {
  return (
    <div className='collection-wrapper'>
        <div className='max-width collections'>
            <div className='collection title'>Collections</div>
            <div className='collection-subtitle-row'>
                <div className='collection-subtitle-text'>
                Explora listas de los mejores restaurantes, cafeterías,
                pubs y bares en alrededor de Santiago, basado en tendencias
                </div>
                <div className='collection-location'>
                    <div> Todas las colecciones de Santiago</div>
                <FaCaretRight className='absolute-center'/>
                </div>
            </div>
            {<Slider {...settings}>
                {list.map((item)=>(
                    <div>
                        <div className='collection-cover'>
                            <img 
                            src={item.cover} 
                            className='collections-image' 
                            alt={item.title}
                        />
                            <div className='gradient-bg'></div>
                            <div className='collection-card-title'>{item.title}</div>
                            <div className='collection-card-subtitle'>
                                <div>{item.places}</div>
                                < FaCaretRight className='absolute-center'/>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>}
        </div>
    </div>
  )
}

export default Collection