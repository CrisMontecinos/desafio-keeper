import React from 'react'
import './vidaNocturna.css'
import Collection from '../common/collection';
import Filters from '../common/filters'
import * as FaIcons from "react-icons/fa6";
import { noche } from '../../data/noche';
import ExploreSection from '../common/exploreSection';

const collectionList  =[
  {
    id: 1,
    title:"Lo mejor de santiago",
    cover: "https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1709811823.png?output-format=webp",
    places: "116 lugares",

  },
  {
    id: 2,
    title:"Para visitar",
    cover: "https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810698.png",
    places: "15 lugares",

  },
  {
    id: 3,
    title:"Lo mejor de las Pizzas",
    cover: "https://b.zmtcdn.com/data/collections/68113c6bddb038ac936a1f63bcf5262e_1707387644.png",
    places: "32 lugares",

  },
  {
    id: 4,
    title:"Lo mejor de santiago",
    cover: "https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1709811823.png?output-format=webp",
    places: "116 lugares",

  },

];

const nocheFilters=[
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

const nocheList = noche;
function VidaNocturna() {
  return (
    <div>
    <Collection list={collectionList}/>
    <div className='max-width'>
      <Filters filterList={nocheFilters}/>
    </div>
    <ExploreSection list={nocheList} collectionName='Restaurante Nocturnos de santiago'/>
  </div>
  )
}

export default VidaNocturna