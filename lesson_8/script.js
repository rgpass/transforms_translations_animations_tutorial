var navTrigger = document.getElementsByClassName('nav-trigger')[0],
  body = document.getElementsByTagName('body')[0];

navTrigger.addEventListener('click', toggleNavigation);


function toggleNavigation(event) {
  // To stop it from jumping to the anchor
  event.preventDefault();

  body.classList.toggle('nav-open');
}
