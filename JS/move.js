const menubtn = document.querySelector('.head .menubtn');
const menulist = document.querySelector('.head .menubox');

menubtn.addEventListener('click', function() {
 menulist.classList.toggle('open');
});
