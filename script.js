const knopje = document.getElementById("knoip");

knopje.addEventListener('click', () => scrollTop());

function scrollTop() {
  document.documentElement.scrollTop = 0;
}