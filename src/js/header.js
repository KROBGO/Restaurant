import { Div } from "./DomELement.js";
import logoSrc from "../assets/images/logo.svg"; 

const header = new Div("header", {
    classes: ["header"],
    attributes: { "data-header": "true" }
});

const container = new Div("div", { classes: ["container"] });
container.appendTo(header.element);

function createLogo(href, alt) {
    const logo = new Div("a", {
        classes: ["logo"],
        attributes: { href: href }
    });

    const logoImg = new Div("img", {
        attributes: {
            src: logoSrc,
            alt: alt,
            width: "160",
            height: "50"
        }
    });
    logoImg.appendTo(logo.element);
    return logo;
}

createLogo("#", "Grilli - Home").appendTo(container.element);

const navbar = new Div("nav", {
    classes: ["navbar"],
    attributes: { "data-navbar": "true" }
});
navbar.appendTo(container.element);

const closeButton = new Div("button", {
    classes: ["close-btn"],
    attributes: { "aria-label": "close menu", "data-nav-toggler": "true" },
    innerHTML: '<ion-icon name="close-outline" aria-hidden="true"></ion-icon>'
});
closeButton.appendTo(navbar.element);

createLogo("#", "Grilli - Home").appendTo(navbar.element);

const navbarList = new Div("ul", { classes: ["navbar-list"] });
navbarList.appendTo(navbar.element);

function createNavbarItem(text, href, isActive = false) {
    const listItem = new Div("li", { classes: ["navbar-item"] });
    listItem.appendTo(navbarList.element);

    const link = new Div("a", {
        classes: ["navbar-link", "hover-underline"],
        attributes: { href: href }
    });
    if (isActive) link.addClass("active");
    link.appendTo(listItem.element);

    const separator = new Div("div", { classes: ["separator"] });
    separator.appendTo(link.element);

    const span = new Div("span", { classes: ["span"], textContent: text });
    span.appendTo(link.element);
}

createNavbarItem("Home", "#home", true);
createNavbarItem("Menus", "#menu");
createNavbarItem("About Us", "#about");
createNavbarItem("Our Chefs", "#");
createNavbarItem("Contact", "#");

const textCenter = new Div("div", { classes: ["text-center"] });
textCenter.appendTo(navbar.element);

const headline = new Div("p", { classes: ["headline-1", "navbar-title"], textContent: "Visit Us" });
headline.appendTo(textCenter.element);

const address = new Div("address", { classes: ["body-4"], innerHTML: 'Restaurant St, Delicious City, <br> London 9578, UK' });
address.appendTo(textCenter.element);

const openHours = new Div("p", { classes: ["body-4", "navbar-text"], textContent: "Open: 9.30 am - 2.30pm" });
openHours.appendTo(textCenter.element);

const emailLink = new Div("a", {
    classes: ["sidebar-link", "body-4"],
    attributes: { href: "mailto:booking@grilli.com" },
    textContent: "booking@grilli.com"
});
emailLink.appendTo(textCenter.element);

const separator = new Div("div", { classes: ["separator"] });
separator.appendTo(textCenter.element);

const bookingLabel = new Div("p", { classes: ["contact-label"], textContent: "Booking Request" });
bookingLabel.appendTo(textCenter.element);

const phoneNumber = new Div("a", {
    classes: ["body-1", "contact-number", "hover-underline"],
    attributes: { href: "tel:+88123123456" },
    textContent: "+88-123-123456"
});
phoneNumber.appendTo(textCenter.element);

const button = new Div("a", { classes: ["btn", "btn-secondary"], attributes: { href: "#" } });
button.appendTo(container.element);

const span1 = new Div("span", { classes: ["text", "text-1"], textContent: "Find A Table" });
span1.appendTo(button.element);

const span2 = new Div("span", { classes: ["text", "text-2"], textContent: "Find A Table" });
span2.element.setAttribute("aria-hidden", "true");
span2.appendTo(button.element);

const navOpen = new Div("button", {
    classes: ["nav-open-btn"],
    attributes: { "aria-label": "open menu", "data-nav-toggler": "true" }
});
navOpen.appendTo(container.element);

function spanCreator(lineClass) {
    const span = new Div("span", { classes: ["line", lineClass] });
    span.appendTo(navOpen.element);
}

spanCreator("line-1");
spanCreator("line-2");
spanCreator("line-3");

const overlay = new Div("div", {
    classes: ["overlay"],
    attributes: { "data-nav-toggler": "true", "data-overlay": "true" }
});
overlay.appendTo(container.element);

export { header };
