const images = [
    {
     img : "./assets/Images/img-1.jpg",
    },
    {
     img : "./assets/Images/img-2.jpg",
    },
    {
     img : "./assets/Images/img-3.jpg",
    },
    {
     img : "./assets/Images/img-4.jpg",
    },
    {
     img : "./assets/Images/img-5.jpg",
    },
    {
     img : "./assets/Images/img-6.jpg",
    },
    {
     img : "./assets/Images/img-7.jpg",
    },
    {
     img : "./assets/Images/img-8.jpg",
    },
    {
     img : "./assets/Images/img-9.jpg",
    },
    {
     img : "./assets/Images/img-11.jpg",
    },
    {
     img : "./assets/Images/img-12.jpg",
    },
    {
     img : "./assets/Images/img-13.jpg",
    },
    {
     img : "./assets/Images/img-14.jpg",
    },
    {
     img : "./assets/Images/img-15.jpg",
    },
    {
     img : "./assets/Images/img-16.jpg",
    },
    {
     img : "./assets/Images/img-17.jpg",
    },
    {
        img : "./assets/Images/img-18.jpg",
    }
]



const container = document.querySelector(".containder");
const swipers = document.querySelector(".swipers");

images.forEach(items =>{
    const {img} = items;

    const swiper = document.createElement("div");
    swiper.classList.add("swiper");
    swiper.innerHTML = `
        <img src="${img}">
    `
    
    swipers.appendChild(swiper)
})
let isDown = false;
let startX;
let scrollLeft;
swipers.addEventListener("mousedown",(e)=>{
    isDown = true;
    startX = e.pageX - swipers.offsetLeft;
    scrollLeft = swipers.scrollLeft;
    swipers.style.cursor = "grab"
})
swipers.addEventListener("mouseup",()=>{
    isDown = false;
    swipers.style.cursor = "unset"
})
swipers.addEventListener("mouseleave",()=>{
    isDown = false;
    swipers.style.cursor = "unset"
})
swipers.addEventListener("mousemove",(e)=>{
    if(!isDown) return ;
    e.preventDefault();
    const x = e.pageX - swipers.offsetLeft;
    const ealk = ( x - startX ) * 3;
    swipers.scrollLeft = scrollLeft - ealk;
    swipers.style.cursor = "grab"
})