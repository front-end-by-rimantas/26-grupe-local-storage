import { Languages } from './components/Languages.js';
import { languagesData } from './data/languagesData.js';

import { Nav } from './components/Nav.js';

const lang = new Languages('#lang_switch', languagesData);

const nav = new Nav('nav', lang.currentLanguage);

lang.addMessenger((lang) => {
    nav.updateContent(lang);
});

lang.sendMessages();