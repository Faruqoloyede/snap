const sideMenu = document.querySelector('.sideMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const main_items = document.querySelector('.sideMenu a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    sideMenu.style.display = 'block';
    sideMenu.style.right = '0';
}

function close(){
    sideMenu.style.right = '-100%';
}