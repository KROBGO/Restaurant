import { Div } from "./DomELement";
import img from "../assets/images/testi-avatar.jpg"


const testi = new Div("section",{
    classes:["section","testi","text-center","has-bg-image"],
    attributes:{"aria-label":"testimonials"}
})

const container = new Div("div",{
    classes:["container"],
})
container.appendTo(testi.element)

const quote = new Div("div",{
    classes:["quote"],
    textContent:"”"
})
quote.appendTo(container.element)

const headline2 = new Div("p",{
    classes:["headline-2","testi-text"],
    textContent:"I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary."
})
headline2.appendTo(container.element)

const wrapper = new Div("div",{
    classes:["wrapper"],
})
wrapper.appendTo(container.element)

const separator1 = new Div("div",{
    classes:["separator"],
})
separator1.appendTo(wrapper.element)

const separator2 = new Div("div",{
    classes:["separator"],
})
separator2.appendTo(wrapper.element)

const separator3 = new Div("div",{
    classes:["separator"],
})
separator3.appendTo(wrapper.element)

const profile = new Div("div",{
    classes:["profile"],
})
profile.appendTo(container.element)

const profileImg= new Div("img",{
    classes:["img"],
    attributes:{"alt":"Sam Jhonson", "src":img,"width":"100","height":"100","loading":"lazy"}
})
profileImg.appendTo(profile.element)

const profileLabel= new Div("p",{
    classes:["label-2","profile-name"],
    textContent:"Sam Jhonson"
})
profileLabel.appendTo(profile.element)

export {testi}