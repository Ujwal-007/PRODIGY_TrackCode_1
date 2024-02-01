const header = document.querySelector(".header");
const header2 = document.querySelector("#header");
console.log(header2);
// window.addEventListener("scroll",function() {
//     header.classList.toggle("sticky",window.scrollY > 80);
// });

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

console.log(menu, navlist);
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

window.addEventListener('scroll', () => {
    // console.log(header2);
    // if (window.scrollY > 80) {
    //   header.style.backgroundColor = 'yellow'; // Change background color on scroll
    // } else {
    //   header.style.backgroundColor = 'transparent'; // Revert to original color when scrolled back to the top
    // }
  });

