const toggleBtn = document.querySelector('.navbar__btn');
const menu = document.querySelector('.navbar__menus');
//객체 설정

// click이 수행될디 클릭된것을 active하도록 만들기
toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
});