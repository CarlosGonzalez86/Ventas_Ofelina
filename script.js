// Modo oscuro toggle
const botonModoOscuro = document.getElementById('modo-oscuro-toggle');

botonModoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
  if (document.body.classList.contains('modo-oscuro')) {
    botonModoOscuro.textContent = 'Modo Claro';
  } else {
    botonModoOscuro.textContent = 'Modo Oscuro';
  }
});