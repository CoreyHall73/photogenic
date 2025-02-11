/*! 
* Theme picker code was taken from https://getbootstrap.com/docs/5.3/customize/color-modes/#javascript, copyright below 
*/ 
/*! 
* Color mode toggler for Bootstrap's docs (https://getbootstrap.com/) 
* Copyright 2011-2023 The Bootstrap Authors 
* Licensed under the Creative Commons Attribution 3.0 Unported License. 
*/ 
import './ThemePicker.scss'; 
import React, { useState } from 'react'; 
import { Dropdown } from 'react-bootstrap'; 
import { MdFormatColorFill } from 'react-icons/md'; 

interface ThemePickerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {} 

const ThemePicker: React.FunctionComponent<ThemePickerProps> = ({ className }) => { 
  const themes = [ 
    { name: 'Blue & Gold Dark', value: 'blue-gold-dark' }, 
    { name: 'Purple & Blue Dark', value: 'purple-blue-dark' }, 
    { name: 'Blue & Gold Light', value: 'blue-gold-light' }, 
    { name: 'Purple & Blue Light', value: 'purple-blue-light' }, 
  ]; 
  
  const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('bs-theme')); 
  
  const handleThemeClick = (theme: string) => { 
    document.documentElement.setAttribute('data-bs-theme', theme); 
    localStorage.setItem('bs-theme', theme); 
    setSelectedTheme(theme); 
  }; 
  
  return ( 
    <Dropdown align="end" className={`theme-dropdown ${className}`}> 
      <Dropdown.Toggle className={`theme-dropdown-btn p-0 border-0`} variant="outline-base-alt"> 
        <MdFormatColorFill className={`text-body`} size={24} /> 
      </Dropdown.Toggle> 
      <Dropdown.Menu> 
        {themes.map(theme => ( 
          <Dropdown.Item 
            className={`text-body ${selectedTheme === theme.value ? 'active' : ''}`} 
            key={theme.name} 
            onClick={() => { 
              handleThemeClick(theme.value); 
            }}> 
            {theme.name} 
          </Dropdown.Item> 
        ))} 
      </Dropdown.Menu> 
    </Dropdown> 
  ); 
}; 

export default ThemePicker;
