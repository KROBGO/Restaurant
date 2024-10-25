import { Div } from "./DomELement";

const top=new Div("a",{
    classes:["back-top-btn"],
    attributes:{"href":"#top","aria-label":"back to top","data-back-top-btn":"true"},
    innerHTML:`<ion-icon name="chevron-up" aria-hidden="true"></ion-icon>`
})

export {top}