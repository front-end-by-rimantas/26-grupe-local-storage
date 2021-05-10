import { Languages } from './components/Languages.js';
import { languagesData } from './data/languagesData.js';

import { Nav } from './components/Nav.js';

new Languages('#lang_switch', languagesData);
new Nav('nav', null);