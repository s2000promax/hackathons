export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

/**
 * Function generate random color
 * @returns {string} - random color in '#xxYYzz' hex format, like: rgb(0...FF, 0...FF. 0...FF).
 */
export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const setToDefaultDOM = () => {
  const divContainer = document.querySelector('.div-container');
  if (!!divContainer) {
    divContainer.remove();
  }
}