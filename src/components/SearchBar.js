import React, { useState } from 'react';
import { getArrayObj } from '../helpers/getArrayObj';

function SearchBar({ setMuseumObjects }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const [params, setParams] = useState({
    q: '',
    isHighlight: false,
    isOnView: false,
  });

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setParams((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function newQ() {
    if (!params.q) return;
    await getArrayObj(2, params, (response) => {
      setMuseumObjects(new Set(response));
    });
    setIsMenuOpen(false);
  }

  return (
    <div className='search-bar'>
      <div className='search-bar__input-box'>
        <input
          name='q'
          value={params.q}
          type='text'
          placeholder='search...'
          className='search-bar__input-text'
          onChange={handleChange}
        />
        <button className='search-bar__input-button' onClick={newQ}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </div>

      <div className='search-bar__categories-box' onClick={toggleMenu}>
        <div className='search-bar__categories-icon'>
          <i className='fa-solid fa-shapes'></i>
        </div>
        <span className='search-bar__categories-text'>Categories &#8964;</span>
      </div>

      {isMenuOpen && (
        <div className='dropdown-menu__container'>
          <label className='dropdown-menu__item'>
            <input
              name='isHighlight'
              checked={params.isHighlight}
              type='checkbox'
              className='dropdown-menu__checkbox'
              onChange={handleChange}
            />{' '}
            Visible at the MET
          </label>
          <label className='dropdown-menu__item'>
            <input
              name='isOnView'
              checked={params.isOnView}
              type='checkbox'
              className='dropdown-menu__checkbox'
              onChange={handleChange}
            />{' '}
            Highlight of the Met
          </label>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
