/* eslint-disable import/first, indent */
global.browser = require('webextension-polyfill');

import '../styles/content_script.scss';
import { getSupportedLanguages, urls } from '../datas/urls.js';

let ISBN, language;
const supportedLanguages = getSupportedLanguages();

function start() {
  // const productTitle = document.getElementById('productTitle').innerHTML;
  ISBN = getISBN();
  language = getLanguage();
  console.log('language', language);
  console.log('ISBN', ISBN);
  if (ISBN && language) {
    const buttonEl = document.createElement('div');
    buttonEl.classList.add('a-button-stack', 'a-button-stack-local');

    const urlsLang = getUrls();
    const randomUrl = urlsLang[parseInt(urlsLang.length * Math.random())];
    const url = formatUrl(randomUrl.url);
    const text = browser.i18n.getMessage('buttonText');
    const icon = browser.runtime.getURL('images/icon-store.png');

    let buttons = `
      <a href="${url}" style="display:block; line-height:30px">
        <span class="a-button a-spacing-small a-button-primary a-button-icon">
          <span class="a-button-inner">
            <i class="a-icon a-icon-local"><img src="${icon}" /></i>
            ${text}
          </span>
        </span>
      </a>
    `;

    console.log(urlsLang);
    for (let i = 0, lg = urlsLang.length; i < lg; i++) {
      const link = urlsLang[i];
      buttons += getLink(link);
    }

    buttonEl.innerHTML = buttons;

    const container = document.querySelector('#buybox .a-box-inner');
    // const container = document.querySelector('#rightCol .a-button-stack').parentNode;
    // const container = document.querySelector('#bbopAndCartBox');
    container.innerHTML = '';
    container.append(buttonEl);
  }
}

function getLanguage() {
  const hrefLang = document.documentElement.lang;
  console.log(hrefLang);

  for (let i = 0, lg = supportedLanguages.length; i < lg; i++) {
    if (hrefLang.indexOf(supportedLanguages[i]) !== -1) {
      return supportedLanguages[i];
    }
  }

  return null;
}

function getISBN() {
  const bulletSpans = document.querySelectorAll('#detailBullets_feature_div li span.a-list-item');
  for (let i = 0; i < bulletSpans.length; ++i) {
    if (bulletSpans[i].innerText && bulletSpans[i].innerText.indexOf('ISBN-13') !== -1) {
      return bulletSpans[i].querySelector('span:last-child').innerText.replace('-', '');
    }
  }
}

function getUrls() {
  const urlsLang = [];
  for (let i = 0, lg = urls.length; i < lg; i++) {
    // console.log(urls[i].lang, urls[i].lang.indexOf(language));
    if (urls[i].lang.indexOf(language) !== -1) {
      // console.log(urls[i]);
      urlsLang.push(urls[i]);
    }
  }
  // console.log(urlsLang);
  return urlsLang;
}

function getLink(link) {
  return `<a href="${formatUrl(link.url)}">${link.name}</a><br>`;
}

function formatUrl(url) {
  return url.replace('##ISBN##', ISBN);
}

document.addEventListener('DOMContentLoaded', () => start());
