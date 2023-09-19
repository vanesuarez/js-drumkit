document.addEventListener("DOMContentLoaded", () => {

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not transofrm
    e.target.classList.remove('playing'); // this en este caso es la key
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // busca un elemento <audio> que tenga un atributo data-key con un valor igual al código de tecla (e.keyCode) que se generó en el evento de tecla (keydown).
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // llama al  div
    if (!audio) return; // stop the function form running all together

    key.classList.add('playing'); // add class playing for css styles
    audio.currentTime = 0; // retrocede el audio al inicio
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

});
