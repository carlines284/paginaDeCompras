const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('#desktop');
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const asidE=document.querySelector('.product-detail');
const btnCarrito=document.querySelector('.navbar-shopping-cart');
const cardsContainer=document.querySelector('.cards-container');

/*Platzi Mail*/
menuEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    if(!asidE.classList.contains('inactive')){
        asidE.classList.add('inactive');
    }
}
/*Menu de btn hamburguesa*/
menuHamIcon.addEventListener('click',toggleMobileMenu);
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    if(!asidE.classList.contains('inactive')){
        asidE.classList.toggle('inactive');
    }
}
/*Aside al apretar el btn carrito*/
btnCarrito.addEventListener('click',toggleAside);
function toggleAside(){
    asidE.classList.toggle('inactive');
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive');
    }
}

/* Product List*/
const productList=[];
//     {
//         name: Mouse,
//         price: '920.00 Bss',
//         image: './images/mouse.webp'
//     },
//     {
//         name: Teclado,
//         price: '870.00 Bs.',
//         image: './images/teclado.webp'
//     },
//     {
//         name: Monitor,
//         price: '3250.00 Bs.',
//         image:'./images/monitor.webp'
//     }

productList.push({
    name: 'Mouse',
    price: '920.00 Bss',
    image: './images/mouse.webp'
});
productList.push({
    name: 'Teclado',
    price: '870.00 Bs.',
    image: './images/teclado.webp'
});
productList.push({
    name: 'Monitor',
    price: '3250.00 Bs.',
    image:'./images/monitor.webp'
});


/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>*/


/*Iteracion sobre productList*/
// function productsRendering(arr){
for(product of productList){

    const productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const productImg=document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    const priceNameContainer=document.createElement('div');
    const pric=document.createElement('p');
    pric.innerText=product.price;
    const nam=document.createElement('p');
    nam.innerText=product.name;
    
    const iconContainer=document.createElement('figure');
    
    const iconsito=document.createElement('img');
    iconsito.setAttribute('src','./icons/bt_add_to_cart.svg');

    iconContainer.appendChild(iconsito);
    priceNameContainer.appendChild(pric);
    priceNameContainer.appendChild(nam);

    productInfo.appendChild(priceNameContainer,iconContainer);
    productInfo.appendChild(iconContainer);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
// }
// productsRendering(productList);