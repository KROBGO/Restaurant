import { Div } from "./DomELement";
import img1 from "../assets/images/menu-1.png";
import img2 from "../assets/images/menu-2.png";
import img3 from "../assets/images/menu-3.png";
import img4 from "../assets/images/menu-4.png";
import img5 from "../assets/images/menu-5.png";
import img6 from "../assets/images/menu-6.png";
import img7 from "../assets/images/shape-5.png";
import img8 from "../assets/images/shape-6.png";
import img9 from "../assets/images/karima CNIB Recto.png";

const menu = new Div("section", {
    classes: ["section", "menu"],
    attributes: { "aria-label": "menu-label", "id": "menu" }
});

// Container principal
const container = new Div("div", { classes: ["container"] });
container.appendTo(menu.element);

// Sous-titre de la section
const sectionSubtitle = new Div("p", {
    classes: ["section-subtitle", "text-center", "label-2"],
    textContent: "Special Selection"
});
sectionSubtitle.appendTo(container.element);

// Titre principal de la section
const headline1 = new Div("h2", {
    classes: ["section-title", "headline-1", "text-center"],
    textContent: "Delicious Menu"
});
headline1.appendTo(container.element);

// Liste en grille pour le menu
const gridList = new Div("ul", { classes: ["grid-list"] });
gridList.appendTo(container.element);

// Fonction pour créer chaque élément de menu
const liConstructor = function(imgName, alt, price, description, Seasonal = "") {
    const li = new Div("li", {});
    li.appendTo(gridList.element);

    const menuCard = new Div("div", { classes: ["menu-card", "hover:card"] });
    menuCard.appendTo(li.element);

    const figure = new Div("figure", {
        classes: ["card-banner", "img-holder"],
        attributes: { style: "--width:100 ; --height:100 ;" }
    });
    figure.appendTo(menuCard.element);

    const img = new Div("img", {
        classes: ["img-cover"],
        attributes: { alt: alt, src: imgName, width: "100", height: "100", loading: "lazy" }
    });
    img.appendTo(figure.element);

    const titleWrapper = new Div("div", { classes: ["title-wrapper"] });
    titleWrapper.appendTo(menuCard.element);

    const cardTitle = new Div("h3", {
        classes: ["title-3"],
        innerHTML: `<a href="#">${alt}</a>`
    });
    cardTitle.appendTo(titleWrapper.element);

    // Badge optionnel pour les éléments "Seasonal" ou "New"
    if (Seasonal) {
        const span = new Div("span", {
            classes: ["badge", "label-1"],
            textContent: Seasonal
        });
        span.appendTo(titleWrapper.element);
    }

    const span2 = new Div("span", {
        classes: ["span", "title-2"],
        textContent: price
    });
    span2.appendTo(titleWrapper.element);

    const p = new Div("p", {
        classes: ["card-text", "label-1"],
        textContent: description
    });
    p.appendTo(li.element);
};

// Création des éléments de menu avec les informations fournies
liConstructor(img1, "Greek Salad", "$25.50", "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.", "Seasonal");
liConstructor(img2, "Lasagne", "$40.00", "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices");
liConstructor(img3, "Butternut Pumpkin", "$10.00", "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.");
liConstructor(img4, "Tokusen Wagyu", "$39.00", "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.", "New");
liConstructor(img5, "Olivas Rellenas", "$25.00", "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.");
liConstructor(img6, "Opu Fish", "$49.00", "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices");
liConstructor(img9, "Tete robgo", "$75.00", "Clavier, souris, internet, electricite, programme and volonte");
// Texte indiquant les horaires
const menuText = new Div("p", {
    classes: ["menu-text", "text-center"],
    innerHTML: 'During winter daily from <span class="span">7:00 pm</span> to <span class="span">9:00 pm</span>'
});
menuText.appendTo(container.element);


const btn = new Div("a", {
    classes: ["btn", "btn-primary"],
    attributes: { href: "#" }
});
btn.appendTo(container.element);

const text1 = new Div("span", { classes: ["text", "text-1"], textContent: "View All Menu" });
text1.appendTo(btn.element);

const text2 = new Div("span", {
    classes: ["text", "text-2"],
    attributes: { "aria-hidden": "true" },
    textContent: "View All Menu"
});
text2.appendTo(btn.element);


const shape = new Div("img", {
    classes: ["shape", "shape-2", "move-anim"],
    attributes: { alt: "", src: img7, width: "921", height: "1036", loading: "lazy" }
});
shape.appendTo(container.element);

const shape2 = new Div("img", {
    classes: ["shape", "shape-3", "move-anim"],
    attributes: { alt: "", src: img8, width: "343", height: "345", loading: "lazy" }
});
shape2.appendTo(container.element);

export { menu };
