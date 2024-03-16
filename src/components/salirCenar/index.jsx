import React from 'react'
import Collection from '../common/collection';
import Filters from '../common/filters'
import './salirCenar.css'
import * as FaIcons from "react-icons/fa6";
import { cena } from '../../data/cena';
import ExploreSection from '../common/exploreSection';


const collectionList  =[
  {
    id: 1,
    title:"Lo mejor de santiago",
    cover: "https://b.zmtcdn.com/data/collections/0784cf30fb980b147c9c0f8f3c85a2f3_1709814009.png?output-format=webp",
    places: "116 lugares",

  },
  {
    id: 2,
    title:"Para visitar",
    cover: "https://b.zmtcdn.com/data/collections/3b1f56c1936a6bfa702efd28188ebe6f_1688043267.png?output-format=webp",
    places: "15 lugares",

  },
  {
    id: 3,
    title:"Lo mejor de las Pizzas",
    cover: "https://b.zmtcdn.com/data/collections/7e95e91cffeab31fa43e3e4918e724ae_1709814263.png?output-format=webp",
    places: "32 lugares",

  },
  {
    id: 4,
    title:"Para tomar un descanso",
    cover: 
    "https://b.zmtcdn.com/data/collections/68113c6bddb038ac936a1f63bcf5262e_1707387644.png",
    places: "12 lugares",

  },

];

const cenaFilters=[
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

const cenaList = cena;
function SalirCenar() {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
        <Filters filterList={cenaFilters}/>
      </div>
      <ExploreSection list={cenaList} collectionName='Restaurante en santiago'/>
    </div>
  )
}

export default SalirCenar