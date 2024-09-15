let heading = document.querySelector("h1")
let imges = document.querySelector(".img")
let back = document.querySelector("back")
let next = document.querySelector("next")
 let i =0;
 let carousel = ["imges/butterfly.webp","imges/butterflyy.avif","imges/iimages.jpeg","imges/images.jpeg"]

 setInterval(()=>{
    heading.textContent ="hello"
    i++
    if (i >= carousel.length)i =0
    images.setAttribute("src",carousel[i])
 },2000);
 console.log(console[i])
