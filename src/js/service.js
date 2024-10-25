import { Div } from "./DomELement";
import img1 from "../assets/images/service-1.jpg"
import img2 from "../assets/images/service-2.jpg"
import img3 from "../assets/images/service-3.jpg"
import shape1 from "../assets/images/shape-1.png"
import shape2 from "../assets/images/shape-2.png"

const service=new Div("section",{
    classes:["section","service","bg-black-10","text-center"],
    attributes:{"aria-label":"service"}
})

const container=new Div("div",{
    classes:["container"],
})
container.appendTo(service.element)

const label2=new Div("p",{
    classes:["section-subtitle","label-2"],
    textContent:"Flavors For Royalty"
})
label2.appendTo(container.element)

const headline1=new Div("h2",{
    classes:["section-title","headline-1"],
    textContent:"We Offer Top Notch"
})
headline1.appendTo(container.element)

const SectionText=new Div("p",{
    classes:["section-text"],
    textContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever."
})
SectionText.appendTo(container.element)


const gridList=new Div("ul",{
    classes:["grid-list"],
})
gridList.appendTo(container.element)


const liConstructor=function(imgName,alt,){
    const li=new Div("li",{})
    li.appendTo(gridList.element)

    const serviceCard=new Div("div",{
        classes:["service-card"],
    })
    serviceCard.appendTo(li.element)

    const hasBefore=new Div("a",{
        classes:["has-before","hover:shine"],
        attributes:{"href":"#"}
    })
    hasBefore.appendTo(serviceCard.element)

    const figure=new Div("figure",{
        classes:["card-banner","img-holder"],
        attributes:{"style":"--width:285 ; --height:336 ;"}
    })
    figure.appendTo(hasBefore.element)

    const img=new Div("img",{
        classes:["img-cover"],
        attributes:{"alt":alt, "src":imgName,"width":"285", "height":"336","loading":"lazy"}
    })
    img.appendTo(figure.element)

    const cardContent=new Div("div",{
        classes:["card-content"],
    })
    cardContent.appendTo(serviceCard.element)

    const cardTitle=new Div("h3",{
        classes:["card-title","title-4"],
        innerHTML: `<a href="#">${alt}</a>`
    })
    cardTitle.appendTo(cardContent.element)

    const a=new Div("a",{
        classes:["btn-text","hover-underline","label-2"],
        attributes:{"href":"#"},
        textContent:"View Menu"
    })
    a.appendTo(cardContent.element)
}

const li1=liConstructor(img1,"Breakfast")
const li2=liConstructor(img2,"Appetizers")
const li3=liConstructor(img3,"Drinks")

const img=new Div("img",{
    classes:["shape","shape-1","move-anim"],
    attributes:{"alt":"shape", "src":shape1,"width":"246", "height":"412","loading":"lazy"}
})
img.appendTo(container.element)

const imge=new Div("img",{
    classes:["shape","shape-2","move-anim"],
    attributes:{"alt":"shape", "src":shape2,"width":"343", "height":"345","loading":"lazy"}
})
imge.appendTo(container.element)


export {service}