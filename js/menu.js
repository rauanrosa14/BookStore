var window_width = window.screen.width;

var menu = document.querySelector('.menu-icon');
menu.onclick = () => {
    document.querySelector('.menu-mobile').classList.toggle('nav');
}

var menu_search = document.querySelector('.menu-search-mobile');
menu_search.onclick = () => {
    document.querySelector('.menu-search').classList.toggle('nav');
}

var menu_admin = document.querySelector('.admin-icon');
menu_admin.onclick = () => {
    document.querySelector('.admin').classList.toggle('nav');
}