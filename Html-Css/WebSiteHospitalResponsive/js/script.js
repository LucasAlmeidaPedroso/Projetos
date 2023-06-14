menu = document.querySelector('#menu-btn');
navbar = document.querySelector('.navbar');

menu.onclick = (a) =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}