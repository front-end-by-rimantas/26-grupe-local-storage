class Languages {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.allLangsDOM = null;
        this.currentLanguage = this.data.default;
        this.messageTo = [];

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

        // update currentLanguage if available in localStorage
        if (localStorage.getItem('lang')) {
            this.currentLanguage = localStorage.getItem('lang');
        }

        this.render();
        this.changeLanguage(this.data.default);
        this.addEvents();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    /**
     * Kitu klasiu objektai gali per si metoda nurodyti, jog jiems atsiustu pranesima, jog pasikeite kalba
     * @param {*} callBackMethod 
     */
    addMessenger(callBackMethod) {
        this.messageTo.push(callBackMethod);
    }

    /**
     * Visiems kas uzsiregistravo nurode savo norimus kviestinus metodus, iskvieciame tuo metodus ir jiems perduodame nauja dabartine pasirinkta kalba
     */
    sendMessages() {
        for (const callBackMethod of this.messageTo) {
            callBackMethod(this.currentLanguage);
        }
    }

    render() {
        let HTML = '';

        for (const lang of this.data.list) {
            HTML += `<div class="lang" data-lang="${lang.short}">${lang.short}</div>`;
        }

        this.DOM.innerHTML = HTML;
        this.allLangsDOM = this.DOM.querySelectorAll('.lang');
    }

    changeLanguage() {
        for (const langDOM of this.allLangsDOM) {
            if (langDOM.dataset.lang === this.currentLanguage) {
                langDOM.classList.add('active');
            } else {
                langDOM.classList.remove('active');
            }
        }
    }

    addEvents() {
        for (const langDOM of this.allLangsDOM) {
            langDOM.addEventListener('click', () => {
                this.currentLanguage = langDOM.dataset.lang;
                this.changeLanguage();

                localStorage.setItem('lang', this.currentLanguage);
                this.sendMessages();
            });
        }
    }
}

export { Languages }