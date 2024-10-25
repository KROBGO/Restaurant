import { Div } from "./DomELement";


const topbar = new Div("div", {
    classes: ["topbar"]
});

const container = new Div("div", {
    classes: ["container"]
});
container.appendTo(topbar.element);


const address = new Div("address", {
    classes: ["topbar-item"]
});
address.appendTo(container.element);

const icon = new Div("div", {
    classes: ["icon"],
    innerHTML: '<ion-icon name="location-outline" aria-hidden="true"></ion-icon>'
});
icon.appendTo(address.element);

const span = new Div("span", {
    classes: ["span"],
    textContent: "Restaurant St, Delicious City, London 9578, UK"
});
span.appendTo(address.element);

const separator = new Div("div", {
    classes: ["separator"]
});
separator.appendTo(container.element);


const topbarItem = new Div("div", {
    classes: ["topbar-item", "item2"]
});
topbarItem.appendTo(container.element);

const icon2 = new Div("div", {
    classes: ["icon"],
    innerHTML: '<ion-icon name="time-outline" aria-hidden="true"></ion-icon>'
});
icon2.appendTo(topbarItem.element);

const span2 = new Div("span", {
    classes: ["span"],
    textContent: "Daily : 8.00 am to 10.00 pm"
});
span2.appendTo(topbarItem.element);


const tel = new Div("a", {
    classes: ["topbar-item","link"],
    attributes: { "href": "tel:+11234567890" }
});
tel.appendTo(container.element);

const icon3 = new Div("div", {
    classes: ["icon"],
    innerHTML: '<ion-icon name="call-outline" aria-hidden="true"></ion-icon>'
});
icon3.appendTo(tel.element);

const span3 = new Div("span", {
    classes: ["span"],
    textContent: "+1 123 456 7890"
});
span3.appendTo(tel.element);


const separator2 = new Div("div", {
    classes: ["separator"]
});
separator2.appendTo(container.element);


const mail = new Div("a", {
    classes: ["topbar-item","link"],
    attributes: { "href": "mailto:booking@restaurant.com" }
});
mail.appendTo(container.element);

const icon4 = new Div("div", {
    classes: ["icon"],
    innerHTML: '<ion-icon name="mail-outline" aria-hidden="true"></ion-icon>'
});
icon4.appendTo(mail.element);

const span4 = new Div("span", {
    classes: ["span"],
    textContent: "booking@restaurant.com"
});
span4.appendTo(mail.element);


export { topbar };
