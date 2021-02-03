const selector = document.querySelector.bind(document);
const visor = selector('#visor');
const section = document.querySelectorAll('.section');
let sections = {};

selector("#btnMenu").addEventListener( 'click' , ()=> {
    selector("#menu").classList.toggle('menu-x');
    selector("#btnMenu").classList.toggle('img-menu-x');
})

selector('#items-products').addEventListener('click',(e)=>{
    const isVisualizar = e.target.parentElement.classList.contains('header');
    if ( isVisualizar ) {
        const srcImg = e.target.parentElement.querySelector('img').src;
        const imgVisor = selector('#visor-img');
        visor.classList.toggle('scale-0');
        visor.classList.toggle('scale-100');
        imgVisor.src = srcImg;
    }
})

selector('#btnClose').addEventListener('click',()=>{
    visor.classList.toggle('scale-0');
    visor.classList.toggle('scale-100');
})

section.forEach( e =>{
    sections[e.id] = e.offsetTop;
})

window.onscroll = ()=>{
    const scrollY = window.scrollY
    for( let i in sections ){
        if (sections[i] <= scrollY) {
            const img = selector('#menu li img')
            selector('.select').setAttribute('class','')
            selector('a[href*='+ i +']').parentElement.setAttribute('class','select')
            selector('a[href*='+ i +']').parentElement.appendChild(img)
        }
    }
}


