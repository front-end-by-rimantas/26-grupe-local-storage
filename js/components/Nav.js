class Nav {
    constructor(selector, language) {
        this.selector = selector;
        this.language = language;

        this.DOM = null;
        this.data = [];


        this.init();
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
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    updateContent(newLanguage) {
        this.language = newLanguage;
        this.getData((data) => {
            this.render(data);
        });
    }

    getData(callback) {
        const URL = `https://front-end-by-rimantas.github.io/26-grupe-local-storage/js/data/nav-${this.language}.json`;

        // const xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         callback(this.responseText);
        //     }
        // };
        // xhttp.open("GET", URL, true);
        // xhttp.send();

        fetch(URL)
            .then(response => response.json())
            .then(data => this.render(data));
    }

    render(newContent) {
        let HTML = '';

        this.data = newContent;
        // this.data = JSON.parse(newContent);

        for (const item of this.data) {
            HTML += `<a href="${item.href}">${item.title}</a>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

export { Nav }




/*

atsiusk duomenis nurodyta kalba
perpiesk turini (kapitalinis perpiesimas)

*/