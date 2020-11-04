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
    const urlsLang = getUrls();
    const randomUrl = urlsLang[parseInt(urlsLang.length * Math.random())];
    const url = formatUrl(randomUrl.url);
    const text = browser.i18n.getMessage('buttonText');
    const icon = browser.runtime.getURL('images/icon-store.png');

    const localElement = document.createElement('div');
    localElement.classList.add('a-button-stack', 'a-button-stack-local');
    const linkButton = document.createElement('a');
    linkButton.style.display = 'block';
    linkButton.style.lineHeight = '30px';
    linkButton.href = url;
    localElement.append(linkButton);

    const abutton = document.createElement('span');
    abutton.classList.add('a-button', 'a-spacing-small', 'a-button-primary', 'a-button-icon');
    linkButton.append(abutton);

    const abuttonInner = document.createElement('span');
    abuttonInner.classList.add('a-button-inner');
    abutton.append(abuttonInner);

    const i = document.createElement('i')
    i.classList.add('a-icon', 'a-icon-local');
    abuttonInner.append(i);

    const img = document.createElement('img');
    img.src = icon;
    i.append(img);

    const span = document.createElement('span');
    span.innerText = text;
    abuttonInner.append(span);

    //   let buttons = `
    //   <a href="${url}" style="display:block; line-height:30px">
    //     <span class="a-button a-spacing-small a-button-primary a-button-icon">
    //       <span class="a-button-inner">
    //         <i class="a-icon a-icon-local"><img src="${icon}" /></i>
    //         ${text}
    //       </span>
    //     </span>
    //   </a>
    // `;
    // buttonEl.innerHTML = buttons;

    const links = document.createElement('div');
    for (let i = 0, lg = urlsLang.length; i < lg; i++) {
      const link = urlsLang[i];
      const a = document.createElement('a');
      a.href = formatUrl(link.url);
      a.innerText = link.name;
      links.append(a);
      const br = document.createElement('br');
      links.append(br);
    }
    localElement.append(links);

    // const container = document.querySelector('#rightCol .a-button-stack').parentNode;
    // const container = document.querySelector('#bbopAndCartBox');
    const container = document.querySelector('#buybox .a-box-inner');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.append(localElement);
  }
}

function getLanguage() {
  const hrefLang = document.documentElement.lang;

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
    if (urls[i].lang.indexOf(language) !== -1) {
      urlsLang.push(urls[i]);
    }
  }
  return urlsLang;
}

function formatUrl(url) {
  return url.replace('##ISBN##', ISBN);
}

document.addEventListener('DOMContentLoaded', () => start());
