import { Div } from "./DomELement";
import img from "../assets/images/special-dish-banner.jpg";
import img2 from "../assets/images/badge-1.png";
import img3 from "../assets/images/shape-4.png";
import img4 from "../assets/images/shape-9.png";

const specialDish = new Div("section", {
    classes: ["special-dish", "text-center"],
    attributes: { "aria-labelledby": "dish-label" },
});

const specialDishBanner = new Div("div", {
    classes: ["special-dish-banner"],
});
specialDishBanner.appendTo(specialDish.element);

const imgCover = new Div("img", {
    classes: ["img-cover"],
    attributes: { "alt": "special dish", "src": img, "width": "940", "height": "900", "loading": "lazy" },
});
imgCover.appendTo(specialDishBanner.element);

const specialDishContent = new Div("div", {
    classes: ["special-dish-content", "bg-black-10"],
});
specialDishContent.appendTo(specialDish.element);

const container = new Div("div", {
    classes: ["container"],
});
container.appendTo(specialDishContent.element);

const imgBadge = new Div("img", {
    classes: ["abs-img"],
    attributes: { "alt": "badge", "src": img2, "width": "28", "height": "41", "loading": "lazy" },
});
imgBadge.appendTo(container.element);

const sectionSubtitle = new Div("p", {
    classes: ["section-subtitle", "label-2"],
    textContent: "Special Dish",
});
sectionSubtitle.appendTo(container.element);

const headline1 = new Div("h2", {
    classes: ["section-title", "headline-1"],
    textContent: "Lobster Tortellini",
});
headline1.appendTo(container.element);  // Correction ici

const sectionText = new Div("p", {
    classes: ["section-text"],
    textContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type.",
});
sectionText.appendTo(container.element);

const wrapper = new Div("div", {
    classes: ["wrapper"],
});
wrapper.appendTo(container.element);

const del = new Div("del", {
    classes: ["body-3", "del"],
    textContent: "$40.00",
});
del.appendTo(wrapper.element);

const span = new Div("span", {
    classes: ["body-1", "span"],
    textContent: "$20.00",
});
span.appendTo(wrapper.element);

const btn = new Div("a", {
    classes: ["btn", "btn-primary"],
    attributes: { "href": "#" },
});
btn.appendTo(container.element);

const text1 = new Div("span", {
    classes: ["text", "text-1"],
    textContent: "View All Menu",
});
text1.appendTo(btn.element);

const text2 = new Div("span", {
    classes: ["text", "text-2"],
    attributes: { "aria-hidden": "true" },
    textContent: "View All Menu",
});
text2.appendTo(btn.element);

const shape = new Div("img", {
    classes: ["shape", "shape-1"],
    attributes: { "alt": "", "src": img3, "width": "179", "height": "359", "loading": "lazy" },
});
shape.appendTo(specialDish.element);

const shape2 = new Div("img", {
    classes: ["shape", "shape-2"],
    attributes: { "alt": "", "src": img4, "width": "351", "height": "462", "loading": "lazy" },
});
shape2.appendTo(specialDish.element);

export { specialDish };
