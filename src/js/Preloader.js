import { Div } from "./DomELement.js";

const Preload = new Div("div", { 
    classes: ["preload"], 
    attributes: { "data-preaload": "true" } 
});

const circle = new Div("div", { classes: ["circle"] });
circle.appendTo(Preload.element);

const grilliText = new Div("p", { 
    classes: ["text"], 
    textContent: "Grilli" 
});
grilliText.appendTo(Preload.element);

export { Preload };
