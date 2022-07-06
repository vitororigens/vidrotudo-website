$('.collapse').collapse()

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active)
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)


var i = 0;
// var A = 0;
var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typeWriter() {
  if (i <= txt.length) {
    document.getElementById("text").innerHTML = txt.slice(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
  //console.log(document.getElementById("text").innerHTML);
}

typeWriter();




function toggleFAB(fab) {
  if (document.querySelector(fab).classList.contains('show')) {
    document.querySelector(fab).classList.remove('show');
  } else {
    document.querySelector(fab).classList.add('show');
  }
}

document.querySelector('.fab .main').addEventListener('click', function () {
  toggleFAB('.fab');
});

document.querySelectorAll('.fab ul li button').forEach((item) => {
  item.addEventListener('click', function () {
    toggleFAB('.fab');
  });
});