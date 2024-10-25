class Div {
    constructor(name, options = {}) {
        this.element = document.createElement(name);

        // Ajouter des classes si fournies
        if (options.classes) {
            options.classes.forEach(cls => {
                if (cls!==""){
                    this.addClass(cls)
                }
            });
        }

        // Ajouter des attributs si fournis
        if (options.attributes) {
            for (const [key, value] of Object.entries(options.attributes)) {
                this.element.setAttribute(key, value);
            }
        }

        // Ajouter du contenu texte si fourni
        if (options.textContent) {
            this.setContent(options.textContent);
        }

        // Ajouter du contenu HTML si fourni
        if (options.innerHTML) {
            this.setHtml(options.innerHTML);
        }
    }

    appendTo(parent) {
        parent.appendChild(this.element);
    }

    setContent(value) {
        this.element.textContent = value;
    }

    setHtml(value) {
        this.element.innerHTML = value;
    }

    addClass(value) {
        this.element.classList.add(value);
    }

    removeClass(value) {
        this.element.classList.remove(value);
    }

    setAttribute(name, value) {
        this.element.setAttribute(name, value);
    }

    removeAttribute(name) {
        this.element.removeAttribute(name);
    }
}

export { Div };
