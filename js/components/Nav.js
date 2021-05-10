class Nav {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
    }

    init() {
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    render() {
        let HTML = '';

        this.DOM.innerHTML = HTML;
    }
}

export { Nav }