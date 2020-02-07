import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './styles/index.css';
import './scripts/scripts.js';

import App from './components/App';

import i18next from 'i18next';

import common_en from "./translations/en/common.json";
import common_pl from "./translations/pl/common.json";



i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        pl: {
            common: common_pl
        },
    },
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

