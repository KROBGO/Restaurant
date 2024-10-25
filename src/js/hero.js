import { Div } from "./DomELement";
import img1 from "../assets/images/hero-slider-1.jpg"; 
import img2 from "../assets/images/hero-slider-2.jpg";
import img3 from "../assets/images/hero-slider-3.jpg";
import img4 from "../assets/images/hero-icon.png";


const hero = new Div("section", {
    classes: ["hero", "text-center"],
    attributes: { "aria-label": "home", "id": "home" }
});

const heroSlider = new Div("ul", {
    classes: ["hero-slider"],
    attributes: { "data-hero-slider": "true"}
});
heroSlider.appendTo(hero.element)

function sliderItem(im,text,htmlText,aClass,active=""){
    const li = new Div("li", {
        classes: ["slider-item", active],
        attributes: { "data-hero-slider-item": "true" }
    });
    const div = new Div("div", {
        classes: ["slider-bg"],
    });
    div.appendTo(li.element)

    const img = new Div("img", {
        classes: ["img-cover"],
        attributes: { "width": "1880",
            "heigth":"950",
            "alt":"",
            "src":im
         }
    });
    img.appendTo(div.element)

    const p = new Div("p", {
        classes: ["label-2","section-subtitle","slider-reveal"],
        textContent:text
    });
    p.appendTo(li.element)

    const h1 = new Div("h1", {
        classes: ["display-1","hero-title","slider-reveal"],
        innerHTML:htmlText
    });
    h1.appendTo(li.element)

    const p2 = new Div("p", {
        classes: ["body-2","hero-text","slider-reveal"],
        textContent:"Come with family & feel the joy of mouthwatering food"
    });
    p2.appendTo(li.element)

    const a = new Div("a", {
        classes: ["btn",aClass,"slider-reveal"],
        attributes:{"href":"#"}
    });
    a.appendTo(li.element)

    const span = new Div("span", {
        classes: ["text","text-1"],
        textContent:"View Our Menu"
    });
    span.appendTo(a.element)

    const span2 = new Div("span", {
        classes: ["text","text-2"],
        textContent:"View Our Menu"
    });
    span2.appendTo(a.element)

    li.appendTo(heroSlider.element)
}

const li1=sliderItem(img1,"Tradational & Hygine",' For the love of <br> delicious food ',"btn-primary","active")
const li2=sliderItem(img2,"delightful experience",' Flavors Inspired by <br> the Seasons ',"btn-secondary")
const li3=sliderItem(img3,"amazing & delicious",' Where every flavor <br> tells a story ',"btn-secondary")

const btn1 = new Div("button", {
    classes: ["slider-btn","prev"],
    attributes: { "aria-label": "slide-to next","data-prev-btn":"true"},
    innerHTML:'<ion-icon name="chevron-back"></ion-icon>'
});
btn1.appendTo(hero.element)

const btn2 = new Div("button", {
    classes: ["slider-btn","next"],
    attributes: { "aria-label": "slide-to next","data-next-btn":"true"},
    innerHTML:'<ion-icon name="chevron-forward"></ion-icon>'
});
btn2.appendTo(hero.element)

const a = new Div("a", {
    classes: ["hero-btn","has-after"],
    attributes:{"href":"#"}
});
a.appendTo(hero.element)

const img = new Div("img", {
    attributes: { "width": "48",
        "heigth":"48",
        "alt":"booking icon",
        "src":img4
     }
});
img.appendTo(a.element)

const span = new Div("span", {
    classes: ["label-2","text-center","span"],
    textContent:"Book A Table"
});
span.appendTo(a.element)


export{hero}