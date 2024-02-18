const menuMobile = document.querySelector('.menu-mobile');
const navMobile = document.querySelector('.nav-mobile');
console.log(navMobile);
var toggleMenuMobile = false;
menuMobile.addEventListener('click', function() {
    toggleMenuMobile = !toggleMenuMobile;
    console.log(toggleMenuMobile);
    if(toggleMenuMobile){
        navMobile.style.display = 'block';
    }else{
        navMobile.style.display = 'none';       
    }
})