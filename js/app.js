const selector = document.querySelector.bind(document);
selector("#btnMenu").addEventListener( 'click' , ()=> {
    console.log('click');
    selector("#menu").classList.toggle('menu-x');
    selector("#btnMenu").classList.toggle('img-menu-x');
})