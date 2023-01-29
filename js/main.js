const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-button');
const navButtonImg = document.querySelector('#nav-button-img');

nav.onclick = () => {
   if (nav.classList.toggle('open')) {
      navButtonImg.src = "./img/icons/nav-close.svg";
   } else {
      navButtonImg.src = "./img/icons/nav-open.svg";
   }
}

AOS.init({
   disable: 'phone',
   once: true
});

