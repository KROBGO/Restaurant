import {Div} from "./DomELement.js"
import img1 from "../assets/images/logo.svg"

const footer = new Div("footer",{
    classes:["footer","section","has-bg-image","text-center"]
})

const container= new Div("div",{
    classes:["container"],
})
container.appendTo(footer.element)

const footerTop= new Div("div",{
    classes:["footer-top","grid-list"],
})
footerTop.appendTo(container.element)

const footerBrand= new Div("div",{
    classes:["footer-brand","has-before","has-after"],
})
footerBrand.appendTo(footerTop.element)

const logo= new Div("a",{
    classes:["logo"],
})
logo.appendTo(footerBrand.element)

const logoImg= new Div("img",{
    classes:["section-title","headline-1"],
    attributes:{"src":img1,"width":"160","height":"50","loading":"lazy","alt":"grilli home"}
})
logoImg.appendTo(logo.element)

const address= new Div("address",{
    classes:["body-4"],
    textContent:"Restaurant St, Delicious City, London 9578, UK"
})
address.appendTo(footerBrand.element)

const contactLink= new Div("a",{
    classes:["body-4","contact-link"],
    attributes:{"href":"mailto:booking@grilli.com"},
    textContent:"booking@grilli.com"
})
contactLink.appendTo(footerBrand.element)

const contactLink2= new Div("a",{
    classes:["body-4","contact-link"],
    attributes:{"href":"tel:+88123123456"},
    textContent:"Booking Request : +88-123-123456"
})
contactLink2.appendTo(footerBrand.element)

const body4= new Div("p",{
    classes:["body-4"],
    textContent:"Open : 09:00 am - 01:00 pm"
})
body4.appendTo(footerBrand.element)

const wrapper= new Div("div",{
    classes:["wrapper"],
})
wrapper.appendTo(footerBrand.element)

const separator= new Div("div",{
    classes:["separator"],
})
separator.appendTo(wrapper.element)

const separator2= new Div("div",{
    classes:["separator"],
})
separator2.appendTo(wrapper.element)

const separator3= new Div("div",{
    classes:["separator"],
})
separator3.appendTo(wrapper.element)

const title1= new Div("p",{
    classes:["title-1"],
    textContent:"Get News & Offers"
})
title1.appendTo(footerBrand.element)

const label1= new Div("p",{
    classes:["label-1"],
    innerHTML:`Subscribe us & Get <span class="span">25% Off.</span>`
})
label1.appendTo(footerBrand.element)

const form= new Div("form",{
    classes:["input-wrapper"],
    attributes:{"action":""}
})
form.appendTo(footerBrand.element)

const iconWrapper= new Div("div",{
    classes:["icon-wrapper"],
    innerHTML:`<ion-icon name="mail-outline" aria-hidden="true"></ion-icon>`
})
iconWrapper.appendTo(form.element)

const emailAdress= new Div("input",{
    classes:["input-field"],
    attributes:{"type":"email","autocomplete":"off","placeholder":"Your email","name":"email-address"}
})
emailAdress.appendTo(iconWrapper.element)

const btn= new Div("button",{
    classes:["btn","btn-secondary"],
    attributes:{"type":"submit"}
})
btn.appendTo(form.element)

const text1= new Div("span",{
    classes:["text","text-1"],
    textContent:"Subscribe"
})
text1.appendTo(btn.element)

const text2= new Div("span",{
    classes:["text","text-2"],
    attributes:{"aria-hidden":"true"},
    textContent:"Subscribe"
})
text2.appendTo(btn.element)

const footerList= new Div("ul",{
    classes:["footer-list"],
})
footerList.appendTo(footerTop.element)

const liCreation=function(text){

    const li= new Div("li",{})
    li.appendTo(footerList.element)

    const liValue= new Div("a",{
        classes:["label-2","footer-link","hover-underline"],
        textContent:text
    })
    liValue.appendTo(li.element)
}

liCreation("Home")
liCreation("Menus")
liCreation("About Us")
liCreation("Our Chefs")
liCreation("Contact")

const footerList2= new Div("ul",{
    classes:["footer-list"],
})
footerList2.appendTo(footerTop.element)

const liCreation2=function(text){

    const li= new Div("li",{})
    li.appendTo(footerList2.element)

    const liValue= new Div("a",{
        classes:["label-2","footer-link","hover-underline"],
        textContent:text
    })
    liValue.appendTo(li.element)
}

liCreation2("Facebook")
liCreation2("Instagram")
liCreation2("Twitter")
liCreation2("Youtube")
liCreation2("Google Map")

const footerBottom= new Div("div",{
    classes:["footer-bottom"],
})
footerBottom.appendTo(container.element)

const copyright= new Div("p",{
    classes:["copyright"],
    innerHTML:`&copy; 2022 Grilli. All Rights Reserved | Crafted by <a href="https://github.com/codewithsadee" target="_blank" rel="norefer" class="link">codewithsadee</a>`
})
copyright.appendTo(footerBottom.element)

export {footer}