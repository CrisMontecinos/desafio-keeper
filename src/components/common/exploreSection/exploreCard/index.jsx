import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa6";
import './exploreCard.css';

const CommentWithRating = ({ name, text, rating }) => (
  <div className='coment-center'>
    <p className='space-comment'>{name}</p>
    <p className='space-comment'>{text}</p>
    <div className='res-rating absolute-center'>
      {rating} <FaIcons.FaStar className='absolute-center' />
    </div>
  </div>
);

const ExploreCard = ({ restaurant }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const handleImageClick = () => {
    // Aquí puedes cargar los comentarios del restaurante desde algún API o fuente de datos
    // Por ahora, usaremos comentarios de ejemplo
    const exampleComments = [
      {name: 'Cristobal Jara', text: '¡Excelente comida y servicio!', rating: 4.5 },
      {name: 'Jaime Guzman', text: 'El ambiente es muy acogedor. Recomiendo el plato de la casa.', rating: 4.5 },
      {name: 'Clara Clayton', text: 'No quedé impresionado con la calidad de la comida.', rating: 4.5 }
    ];
    setComments(exampleComments);
    setShowComments(true);
  };

  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className='explore-card cur-po'>
      <div className='explore-card-cover'>
        <img src={coverImg} alt={name} className='explore-card-image' onClick={handleImageClick} />
        <div className='delivery-time'>{deliveryTime}</div>
        {proOff && <div className='pro-off'>{proOff}</div>}
        {goldOff && <div className='gold-off absolute-center'>{goldOff}</div>}
        {discount && <div className='discount absolute-center'>{discount}</div>}
      </div>
      <div className='res-row'>
        <div className='res-name'>{name}</div>
        {rating && (
          <div className='res-rating absolute-center'>
            {rating} <FaIcons.FaStar className='absolute-center' />
          </div>
        )}
      </div>
      <div className='res-row'>
        {cuisines.length && (
          <div className='res-cuisine'>
            {cuisines.map((item, i) => (
              <span className='res-cuisine-tag' key={i}>
                {item}{i !== cuisines.length - 1 && ","}
              </span>
            ))}
          </div>
        )}
        {approxPrice && <div className='approx-price'>{approxPrice}</div>}
      </div>
      {showComments && (
        <div className='comments-popup'>
          <h3>Comentarios</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <CommentWithRating name={comment.name} text={comment.text} rating={comment.rating} />
              </li>
            ))}
          </ul>
          <button onClick={() => setShowComments(false)} className='button-close'>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
