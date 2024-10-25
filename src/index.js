import "./style.css"
import { Preload } from "./js/Preloader"
import { topbar } from "./js/topBar"
import { header } from "./js/header"
import { main } from "./js/article"
import { footer } from "./js/footer"
import { top } from "./js/BackToTop"
Preload.appendTo(document.body)
topbar.appendTo(document.body)
header.appendTo(document.body)
main.appendTo(document.body)
footer.appendTo(document.body)
top.appendTo(document.body)

// Preload

const preloader=document.querySelector("[data-preaload]")

window.addEventListener("load",()=>{
    preloader.classList.add("loaded")
    document.body.classList.add("loaded")
    autoSlide()
})

// add event listener

const addEventOnElement=function(elements,eventType,callback){
    for(let i=0,len=elements.length;i<len;i++){
        elements[i].addEventListener(eventType,callback)
    }
}

// navbar

const navbar=document.querySelector("[data-navbar]");
const navTogglers=document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar=function(){
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("nav-active")
}

addEventOnElement(navTogglers,"click",toggleNavbar)

// header back to top
const BackToTop=document.querySelector("[data-back-top-btn]")
const header2=document.querySelector("[data-header]")

let lastScrollPos=0;

const hideheader= function () {
    const isScrollBottom= lastScrollPos < window.scrollY;
    if(isScrollBottom){
        header2.classList.add("hide")
    }else{
        header2.classList.remove("hide")
    }

    lastScrollPos= window.scrollY;
}

window.addEventListener("scroll",()=>{
    if (window.scrollY>=50){
        header2.classList.add("active")
        BackToTop.classList.add("active")
        hideheader()
    }else{
        header2.classList.remove("active")
        BackToTop.classList.remove("active")
    }
})


// HERO

const heroSlider=document.querySelector("[data-hero-slider]")
const heroSliderItems=document.querySelectorAll("[data-hero-slider-item]")
const heroSliderPrevBtn=document.querySelector("[data-prev-btn]")
const heroSliderNextBtn=document.querySelector("[data-next-btn]")

let currentSlidePos=0
let lastActiveSliderItem=heroSliderItems[0]

const updateSliderPos=function(){
    lastActiveSliderItem.classList.remove("active")
    heroSliderItems[currentSlidePos].classList.add("active")
    lastActiveSliderItem=heroSliderItems[currentSlidePos]
}

const slideNext=function (){
    if(currentSlidePos>=heroSliderItems.length-1){
        currentSlidePos=0
    }else{
        currentSlidePos++
    }

    updateSliderPos()
}

heroSliderNextBtn.addEventListener("click",slideNext)

const sliderPrev=function (){
    if(currentSlidePos<=0){
        currentSlidePos=heroSliderItems.length-1
    }else{
        currentSlidePos--
    }

    updateSliderPos()
}

heroSliderPrevBtn.addEventListener("click",sliderPrev)

let autoSlideInterval;

const autoSlide=function(){
    autoSlideInterval=setInterval(function(){
        slideNext()
    },7000)
}

autoSlide()

addEventOnElement([heroSliderNextBtn,heroSliderPrevBtn],"mouseover",function(){
    console.log(1)
    clearInterval(autoSlideInterval)
})

addEventOnElement([heroSliderNextBtn,heroSliderPrevBtn],"mouseout",autoSlide)

// ABOUT PARALLAX EFFECT

const parallaxItems=document.querySelectorAll("[data-parallax-item]")

let x,y;

window.addEventListener("mousemove",function(event){
    y=(event.clientY/window.innerHeight*10)-5
    x=(event.clientX/window.innerWidth*10)-5
    

    x=x-(x*2)
    y=y-(y*2)
    for (let i=0, len=parallaxItems.length;i<len;i++){
        x=x*Number(parallaxItems[i].dataset.parallaxSpeed)
        y=y*Number(parallaxItems[i].dataset.parallaxSpeed)
        parallaxItems[i].style.transform=`translate(${x}px, ${y}px)`
    }
})

