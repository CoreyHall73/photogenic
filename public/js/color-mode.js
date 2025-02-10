// Handle theme switching in the browser

// (function () {
//     // Get stored theme (if any)
//     const storedTheme = localStorage.getItem('bs-theme') || 'blue-gold-dark'; // Default to Blue & Gold Dark
    
//     // Function to switch themes
//     const switchTheme = (theme) => {
//       document.documentElement.setAttribute('data-bs-theme', theme);
//       localStorage.setItem('bs-theme', theme);
//     };
  
//     // Event listener for theme switch (you could use your theme picker here)
//     document.querySelectorAll('.theme-toggle').forEach((toggle) => {
//       toggle.addEventListener('click', function () {
//         const theme = this.getAttribute('data-theme');
//         switchTheme(theme);
//       });
//     });
  
//     // Apply the stored theme on page load
//     if (storedTheme) {
//       switchTheme(storedTheme);
//     }
//   })();
  

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
    const getStoredTheme = () => localStorage.getItem('bs-theme');
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme();
      if (storedTheme) {
        return storedTheme;
      }
  
      return 'blue-gold-dark';
    };
  
    const setTheme = theme => {
      localStorage.setItem('bs-theme', theme);
      document.documentElement.setAttribute('data-bs-theme', theme);
    };
  
    setTheme(getPreferredTheme());
  })();
  