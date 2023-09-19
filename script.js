document.addEventListener("DOMContentLoaded", () => {

  function playsound() {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // busca un elemento <audio> que tenga un atributo data-key con un valor igual al código de tecla (e.keyCode) que se generó en el evento de tecla (keydown).
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // llama al  div
    if (!audio) return; // stop the function form running all together
    audio.currentTime = 0; // retrocede el audio al inicio
    audio.play();
    key.classList.add("playing"); // add class playing for css styles
  }

  function removeTransition(e) {
    if (e.propertyName !== "transition") return; // skip it if it's not transofrm
    this.classList.remove("playing"); // this en este caso es la key
  }

  const keys = querySelectorAll(".key");

  // events listener
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition));
    window.addEventListener("keydown", playsound);
});
