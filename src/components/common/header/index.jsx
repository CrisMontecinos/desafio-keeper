import React, { useState } from 'react';
import './header.css';
import * as FaIcons from "react-icons/fa6";

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  // Función para manejar cambios en el campo de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Aquí podrías ejecutar la búsqueda automáticamente al escribir o puedes
    // esperar a que el usuario presione "Enter" si lo prefieres.
  };

  // Función para manejar la búsqueda de restaurantes
  const handleSearch = () => {
    // Aquí podrías ejecutar la lógica de búsqueda y mostrar los resultados
    console.log('Búsqueda realizada:', searchTerm);
  };

  return (
    <div className='max-width header'>
      <img
        src='https://www.keepercondominios.com/images/logo-nav.svg'
        alt='Keeper-logo'
        className='header-logo'
      />
      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <FaIcons.FaLocationDot className='absolute-center location-icon' />
              <div>Santigo de Chile</div>
            </div>
            <FaIcons.FaCaretDown className='absolute-center' />
          </div>
          <div className='location-search-separator'></div>
          <div className='header-searchBar'>
            <FaIcons.FaMagnifyingGlass className='absolute-center search-icon' />
            <input
              placeholder='Buscar restaurante, gastronomía o algún plato'
              className='search-input'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearch} className="header-profile-button-search"> Buscar</button>
          </div>
        </div>
        <div className='profile-wrapper'>
          <button className="header-profile-button">Ingresar</button>
        </div>
      </div>
    </div>
  );
}

export default Header;