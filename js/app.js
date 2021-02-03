const selector = document.querySelector.bind(document);
const visor = selector('#visor');
const section = document.querySelectorAll('.section');
let sections = {};

window.onhashchange = function () {
    window.history.pushState('', document.title, window.location.pathname)
  }

selector("#btnMenu").addEventListener( 'click' , ()=> {
    selector("#menu").classList.toggle('menu-x');
    selector("#btnMenu").classList.toggle('img-menu-x');
})

selector('#items-products').addEventListener('click',(e)=>{
    const isVisualizar = e.target.parentElement.classList.contains('header');
    const isPedir = e.target.classList.contains('pedir');
    if ( isVisualizar ) {
        const srcImg = e.target.parentElement.querySelector('img').src;
        const imgVisor = selector('#visor-img');
        visor.classList.toggle('scale-0');
        visor.classList.toggle('scale-100');
        imgVisor.src = srcImg;
    }
    if (isPedir) {
        const detalle = e.target.parentElement; 
        const titulo = detalle.querySelector('h2').textContent;
        const descripcion = detalle.querySelector('p').textContent;
        location.hash = "#contact";
        selector('#descripcion').value = titulo + '\n' + '-'.repeat(titulo.length + 3 ) + '\n' + descripcion
    }
})

selector('#btnWhatsApp').addEventListener('click' , ()=>{
    const nombre = selector('#nombres').value
    const correo = selector('#correo').value
    const celular = selector('#celular').value
    const descripcion = selector('#descripcion').value
    const mensaje = `Hola! mi nombre es *${nombre}*\nRequiero el siguiente pedido:\n*${descripcion}*\n📧 Correo: *${correo}*\n📱 Celular: *${celular}*\n*GRACIAS!!*`;
    // location.href ="https://api.whatsapp.com/api/send?phone=51922138332&text="+mensaje;

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


