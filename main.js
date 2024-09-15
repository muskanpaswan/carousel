let heading = document.querySelector("h1")
let images = document.querySelector(".img")
let back = document.querySelector(".back")
let next = document.querySelector(".next")
let i = 0;
let text = ["1", "2", "3", "4"]
let carousel = ["imges/butterfly.webp", "imges/butterflyy.avif", "imges/iimages.jpeg", "imges/images.jpeg", "imges/co.jpg", "imges/compr.jpg", "imges/imagesss.jpeg", "imges/computer.jpg", "imges/yello.jpeg", "imges/yellooo.jpeg", "imges/yello.jpeg"]

// setInterval(() => {
//  heading.textContent = "hello"
// i++
// if (i >= carousel.length) i = 0;
// images.setAttribute("src", carousel[i])
// }, 2000);
// console.log(carousel[i])


function randomColor() {
    let colors = ["red", "green", "aqua", "orange", "pink", "blue", "yello", "brown", "purple"]
    return colors[Math.floor(Math.random() * colors.length)]
}

// next.addEventListener("click", () => {

// })


// back.addEventListener("click", () => {
// document.body.style.backgroundColor = randomColor();

// })
back.addEventListener("click", () => {
    console.log("muskan")
    i--;
    if (i < 0) i = 3;
    images.setAttribute("src", carousel[i]);
    images.setAttribute("alt", text[i]);
    console.log(images)
    document.body.style.backgroundColor = randomColor();
}
)

next.addEventListener("click", () => {
    console.log("kumari")
    i++;
    if (i >= carousel.length) i = 0;
    images.setAttribute("src", carousel[i]);
    images.setAttribute("alt", text[i]);
    console.log(images);
    document.body.style.backgroundColor = randomColor();
})


