import { Div } from "./DomELement";
import img1 from "../assets/images/features-icon-1.png"
import img2 from "../assets/images/features-icon-2.png"
import img3 from "../assets/images/features-icon-3.png"
import img4 from "../assets/images/features-icon-4.png"
import img5 from "../assets/images/shape-1.png"
import img6 from "../assets/images/shape-8.png"

const features= new Div("section",{
    classes:["section","features","text-center"],
    attributes:{"aria-label":"features"}
})

const container= new Div("div",{
    classes:["container"],
})
container.appendTo(features.element)

const sectionSubtitle= new Div("p",{
    classes:["section-subtitle","label-2"],
    textContent:"Why Choose Us"
})
sectionSubtitle.appendTo(container.element)

const headline1= new Div("h2",{
    classes:["section-title","headline-1"],
    textContent:"Our Strength"
})
headline1.appendTo(container.element)

const gridList= new Div("ul",{
    classes:["grid-list"],
})
gridList.appendTo(container.element)

const featureItems = function(img,text){
    const featureItem= new Div("li",{
        classes:["feature-item"],
    })
    featureItem.appendTo(gridList.element)

    const featureCard= new Div("div",{
        classes:["feature-card"],
    })
    featureCard.appendTo(featureItem.element)

    const cardIcon= new Div("div",{
        classes:["card-icon"],
    })
    cardIcon.appendTo(featureCard.element)

    const cardImg= new Div("img",{
        attributes:{"alt":"icon", "src":img,"width":"100","height":"80","loading":"lazy"}
    })
    cardImg.appendTo(cardIcon.element)

    const cardTitle= new Div("h3",{
        classes:["card-ttile","title-2"],
        textContent:text
    })
    cardTitle.appendTo(featureCard.element)

    const cardText= new Div("p",{
        classes:["card-text","label-1"],
        textContent:"Lorem Ipsum is simply dummy printing and typesetting."
    })
    cardText.appendTo(featureCard.element)
}

featureItems(img1,"Hygienic Food")
featureItems(img2,"Fresh Environment")
featureItems(img3,"Skilled Chefs")
featureItems(img4,"Event & Party")

const cardImg1= new Div("img",{
    classes:["shape","shape-1"],
    attributes:{"alt":"icon", "src":img5,"width":"208","height":"178","loading":"lazy"}
})
cardImg1.appendTo(container.element)

const cardImg2= new Div("img",{
    classes:["shape","shape-2"],
    attributes:{"alt":"icon", "src":img6,"width":"120","height":"115","loading":"lazy"}
})
cardImg2.appendTo(container.element)

export {features}