import { Div } from "./DomELement";
import img1 from "../assets/images/event-1.jpg"
import img2 from "../assets/images/event-2.jpg"
import img3 from "../assets/images/event-3.jpg"

const events= new Div("section",{
    classes:["section","event","bg-black-10"],
    attributes:{"aria-label":"event"}
})

const container= new Div("div",{
    classes:["container"],
})
container.appendTo(events.element)

const sectionSubtitle= new Div("p",{
    classes:["section-subtitle","label-2","text-center"],
    textContent:"Recent Updates"
})
sectionSubtitle.appendTo(container.element)

const headline1= new Div("h2",{
    classes:["section-title","headline-1","text-center"],
    textContent:"Upcoming Event"
})
headline1.appendTo(container.element)

const gridList= new Div("ul",{
    classes:["grid-list"],
})
gridList.appendTo(container.element)

const eventItems = function(img,timeText,datetime,textSub){
    const eventItem= new Div("li",{
    })
    eventItem.appendTo(gridList.element)

    const eventCard= new Div("div",{
        classes:["event-card","has-before","hover:shine"],
    })
    eventCard.appendTo(eventItem.element)

    const cardBanner= new Div("div",{
        classes:["card-banner","img-holder"],
        attributes:{"style":"--width:350 ; --height:450 ;"}
    })
    cardBanner.appendTo(eventCard.element)

    const cardImg= new Div("img",{
        classes:["img-cover"],
        attributes:{"alt":"Flavour so good you’ll try to eat with your eyes.", "src":img,"width":"350","height":"450","loading":"lazy"}
    })
    cardImg.appendTo(cardBanner.element)

    const time= new Div("time",{
        classes:["publish-date","label-2"],
        attributes:{"datetime":datetime},
        textContent:timeText
    })
    time.appendTo(cardBanner.element)

    const cardContent= new Div("div",{
        classes:["card-content"],
    })
    cardContent.appendTo(eventCard.element)

    const cardSubtitle= new Div("p",{
        classes:["card-subtitle","label-2","text-center"],
        textContent:textSub
    })
    cardSubtitle.appendTo(cardContent.element)

    const cardTitle= new Div("h3",{
        classes:["card-title","title-2","text-center"],
        textContent:"Flavour so good you’ll try to eat with your eyes."
    })
    cardTitle.appendTo(cardContent.element)
}

eventItems(img1,"15/09/2022","2022-09-15","Food, Flavour")
eventItems(img2,"08/09/2022","2022-09-08","Healthy Food")
eventItems(img3,"03/09/2022","2022-09-03","Recipie")


const btn= new Div("a",{
    classes:["btn","btn-primary"],
    attributes:{"href":"#"}
})
btn.appendTo(container.element)

const text1= new Div("span",{
    classes:["text","text-1"],
    textContent:"View Our Blog"
})
text1.appendTo(btn.element)

const text2= new Div("span",{
    classes:["text","text-2"],
    attributes:{"aria-hidden":"true"},
    textContent:"View Our Blog"
})
text2.appendTo(btn.element)

export {events}