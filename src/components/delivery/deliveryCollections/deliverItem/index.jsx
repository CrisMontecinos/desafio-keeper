import React from 'react'
import "./deliveryItem.css"

const DeliverItem = ({item}) => {
  return (
    <div className='delivery-item'>
        <div className='delivery-item-cover'>
            <img
             src={item.cover}
            className='delivery-item-image' 
            alt={item.title} 
            />
        </div>
        <div className='delivery-item-title'>{item.title}</div>
    </div>
  )
}

export default DeliverItem