import { Div } from "./DomELement";
import img1 from "../assets/images/about-banner.jpg"
import img3 from "../assets/images/about-abs-image.jpg"
import img5 from "../assets/images/badge-2.png"
import img7 from "../assets/images/shape-3.png"

const about=new Div("section",{
    classes:["section","about","text-center"],
    attributes:{"aria-labeldby":"about-label","id":"about"}
})

const container=new Div("div",{
    classes:["container"],
})
container.appendTo(about.element)

const aboutContent=new Div("div",{
    classes:["about-content"],
})
aboutContent.appendTo(container.element)

const label2=new Div("p",{
    classes:["label-2", "section-subtitle"],
    attributes:{"id":"about-label"},
    textContent:"Our Story"
})
label2.appendTo(aboutContent.element)


const headline1=new Div("h2",{
    classes:["headline-1", "section-title"],
    textContent:"Every Fla vor Tells a Story"
})
headline1.appendTo(aboutContent.element)

const SectionText=new Div("p",{
    classes:["section-text"],
    textContent:"Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into."
})
SectionText.appendTo(aboutContent.element)


const contactLabel=new Div("div",{
    classes:["contact-label"],
    textContent:"Book Through Call"
})
contactLabel.appendTo(aboutContent.element)

const contact=new Div("a",{
    classes:["contact-number","body-1","hover-underline"],
    attributes:{"href":"tel:+804001234567"},
    textContent:"+80 (400) 123 4567"
})
contact.appendTo(aboutContent.element)

const btn=new Div("a",{
    classes:["btn","btn-primary"],
    attributes:{"href":"#"},
})
btn.appendTo(aboutContent.element)

const span1=new Div("span",{
    classes:["text","text-1"],
    textContent:"Read More"
})
span1.appendTo(btn.element)

const span2=new Div("span",{
    classes:["text","text-2"],
    attributes:{"aria-hidden":"true"},
    textContent:"Read More"
})
span2.appendTo(btn.element)

const figure=new Div("figure",{
    classes:["about-banner"],
})
figure.appendTo(container.element)

const img=new Div("img",{
    classes:["w-100"],
    attributes:{"alt":"about banner", "src":img1,"width":"570","height":"570","loading":"lazy", "data-parallax-item":"true","data-parallax-speed":"1"}
})
img.appendTo(figure.element)

const abs=new Div("div",{
    classes:["abs-img","abs-img-1","has-before"],
    attributes:{"data-parallax-item":"true","data-parallax-speed":"1.75"}
})
abs.appendTo(figure.element)

const img2=new Div("img",{
    classes:["w-100"],
    attributes:{"alt":"", "src":img3,"width":"285","height":"285","loading":"lazy", "data-parallax-item":"true","data-parallax-speed":"1"}
})
img2.appendTo(abs.element)

const abs2=new Div("div",{
    classes:["abs-img","abs-img-2","has-before"],
    attributes:{"data-parallax-item":"true","data-parallax-speed":"1.75"}
})
abs2.appendTo(figure.element)

const img4=new Div("img",{
    classes:["w-100"],
    attributes:{"alt":"", "src":img5,"width":"133","height":"134","loading":"lazy"}
})
img4.appendTo(abs2.element)

const img6=new Div("img",{
    classes:["shape"],
    attributes:{"alt":"", "src":img7,"width":"197","height":"194","loading":"lazy"}
})
img6.appendTo(figure.element)



export{about}