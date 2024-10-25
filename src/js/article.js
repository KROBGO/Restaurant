import { Div } from "./DomELement";
import { hero } from "./hero";
import { service } from "./service";
import { about } from "./about";
import { specialDish } from "./SpecialDish";
import { menu } from "./Menu";
import { testi } from "./testimonials";
import { reservation } from "./reservation";
import { features } from "./features";
import { events } from "./events";
const main=new Div("main",{})
const articles=new Div("article",{})
articles.appendTo(main.element)
hero.appendTo(articles.element)
service.appendTo(articles.element)
about.appendTo(articles.element)
specialDish.appendTo(articles.element)
menu.appendTo(articles.element)
testi.appendTo(articles.element)
reservation.appendTo(articles.element)
features.appendTo(articles.element)
events.appendTo(articles.element)
export{main}