import React from 'react';
import { restaurants } from '../../data/restaurants';
import ExploreSction from '../common/exploreSection';
import Filters from '../common/filters';
import './delivery.css';
import * as FaIcons from "react-icons/fa6";
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';

const deliveryFilters=[
  {
      id:1,
      icon: <FaIcons.FaFilter className='absolute-center' />,
      title:'Filtros',
  },
  {
      id:2,
      title:'Clasificación 4.0+',
  }, 
  {
      id:3,
      title:'Seguro y higenico',
  }, 
  {
      id:4,
      title:'Pure vegetariano',
  },
  {
      id:5,
      title:'Tiempo de Delivery',
      icon: <FaIcons.FaBusinessTime className='absolute-center' />,
  },
  {
      id:6,
      title:'Ofertas',

  },
];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters} />
      </div>
        <DeliveryCollections/>
        <TopBrands/>
        <ExploreSction 
        list={restaurantList} 
        collectionName='Restaurantes con Delivery'/>
    </div>
  );
};

export default Delivery