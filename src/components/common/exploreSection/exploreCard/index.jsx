import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa6";
import './exploreCard.css';

const ExploreCard = ({ restaurant }) => {
  const [showComments, setShowComments] = useState(false); // Estado para controlar la visibilidad de la ventana emergente
  const [comments, setComments] = useState([]); // Estado para almacenar los comentarios de la gente

  // Función para manejar el clic en la imagen y mostrar los comentarios
  const handleImageClick = () => {
    // Aquí se puedes cargar los comentarios del restaurante desde algún API o fuente de datos
    // Por ahora, usaremos comentarios de ejemplo
    const exampleComments = [
      "¡Excelente comida y servicio!",
      "El ambiente es muy acogedor. Recomiendo el plato de la casa.",
      "No quedé impresionado con la calidad de la comida.",
    ];
    setComments(exampleComments);
    setShowComments(true); // Mostrar la ventana emergente de comentarios
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
            {cuisines.map((item, i) => {
              return (
                <span className='res-cuisine-tag' key={i}>
                  {item}
                  {i !== cuisines.length - 1 && ","}
                </span>
              );
            })}
          </div>
        )}
        {approxPrice && <div className='approx-price'>{approxPrice}</div>}
      </div>
      {showComments && (
        <div className='comments-popup'>
          <h3>Comentarios</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <button onClick={() => setShowComments(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
