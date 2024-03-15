import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './topBrands.css'

const topBrandList=[
    {
        id:1,
        time:"32 minutos",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp",
    },
    {
        id:2,
        time:"32 minutos",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp",
    },
    {
        id:3,
        time:"32 minutos",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png?output-format=webp",
    },
    {
        id:4,
        time:"32 minutos",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp",    
    },
    {
        id:5,
        time:"32 minutos",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1f9e533211a32f12a534f824879b9de2_1703038990.png?output-format=webp",    
    },
    {
        id:6,
        time:"32 minutos",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",    
    },
    {
        id:7,
        time:"32 minutos",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png?output-format=webp",    
    },
    {
        id:8,
        time:"32 minutos",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1c69c696c67a0791937fab960a9bdf0a_1611298398.png?output-format=webp",    
    },
    {
        id:9,
        time:"32 minutos",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/49939e746ce5db461213bca36c626a31_1620799504.png?output-format=webp",    
    },

];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>, 
    prevArrow: <PrevArrow/>,
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'> Las mejores marcas para ti</div>
        <Slider {...settings}>
            {topBrandList.map((brand)=>{
                return (<div className='top-brand-center'>
                    <div className='top-brands-cover'>
                        <img 
                        src={brand.cover} 
                        className='top-brands-images' 
                        alt={brand.time}
                        />
                        <div className='top-brands-time'>{brand.time}</div>
                    </div>
                </div>
                );
            })}
        </Slider>
    </div>
  )
}

export default TopBrands