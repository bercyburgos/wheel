(function() {
  const rueda = document.querySelector('.rueda');
  const startButton = document.querySelector('.button');
  let deg = 0;

  startButton.addEventListener('click', () => {
    // Desactivamos el boton mientras hace spin
    startButton.style.pointerEvents = 'none';
    // Calcula la rotacion
    deg = Math.floor(5000 + Math.random() * 4000);
    // Transiciones de la rueda
    rueda.style.transition = 'all 8s ease-out';
    // Rotacion de la rueda
    rueda.style.transform = `rotate(${deg}deg)`;
    // blur de la rueda
    rueda.classList.add('blur');
  });

  rueda.addEventListener('transitionend', () => {
    // Eliminacion del blur en la trasicion
    rueda.classList.remove('blur');
    // Habilitar por segunda vez el boton
    startButton.style.pointerEvents = 'auto';
    rueda.style.transition = 'none';
    const actualDeg = deg % 360;
    rueda.style.transform = `rotate(${actualDeg}deg)`;
  });
})();

//se captura la informacion del jugador
const Capturar = function(){
  let lstNumero = document.getElementsByClassName("input"),
      arrayGuardar = [];         
  for (var i = 0; i < lstNumero.length; i++) {    
      arrayGuardar[i] = lstNumero[i].value;
      console.log (lstNumero[i].value);     
      }       
  }

  let getinfo=function(){
    let name = document.getElementById("jugador").value;
    let id= document.getElementById("Identificacion")
    console.log(name+""+id)
  }
  

