// TODO find more urls for more countries
// TODO add location
// TODO add featured link (eg: canada)
let supportedLanguages = []; // TODO auto generate supported languages
export function getSupportedLanguages() {
  if (supportedLanguages.length > 0) return supportedLanguages;

  for (let i = 0, lg = urls.length; i < lg; i++) {
    supportedLanguages = supportedLanguages.concat(urls[i].lang);
  }
  supportedLanguages = arrayUnique(supportedLanguages);
  return supportedLanguages;
}

export const urls = [
  // FR //////////////////
  {
    lang: ['fr-fr'],
    name: 'placedeslibraires.fr',
    url: 'https://www.placedeslibraires.fr/livre/##ISBN##/',
  },
  {
    lang: ['fr-fr'],
    name: 'librairiesindependantes.com',
    url: 'https://www.librairiesindependantes.com/product/##ISBN##/',
  },
  {
    lang: ['fr-fr'],
    name: 'lalibrairie.com',
    url: 'https://www.lalibrairie.com/livres/recherche.html?rapid-search=##ISBN##',
  },
  {
    lang: ['fr-fr'],
    name: 'leslibraires.fr',
    url: 'https://www.leslibraires.fr/livre/##ISBN##/',
  },
  {
    lang: ['fr-fr'],
    name: 'decitre.fr',
    url: 'https://www.decitre.fr/livres/##ISBN##.html',
  },
  {
    lang: ['fr-fr'],
    name: 'recyclivre.com',
    url: 'https://www.recyclivre.com/shop/recherche?s=##ISBN##',
  },
  {
    lang: ['fr-fr'],
    name: 'librairies-nouvelleaquitaine.com',
    url: 'https://www.librairies-nouvelleaquitaine.com/livre/##ISBN##/',
  },

  // EN - UK //////////////////
  {
    lang: ['en-gb'],
    name: 'waterstones.com',
    url: 'https://www.waterstones.com/index/search?term=##ISBN##',
  },
  {
    lang: ['en-gb'],
    name: 'hive.co.uk',
    url: 'https://www.hive.co.uk/Search/Keyword?keyword=##ISBN##',
  },
  {
    lang: ['en-gb'],
    name: 'alibris.co.uk',
    url: 'https://www.alibris.co.uk/booksearch?keyword=##ISBN##',
  },
  {
    lang: ['en-gb'],
    name: 'blackwells.co.uk',
    url: 'https://blackwells.co.uk/bookshop/product/##ISBN##',
  },
  {
    lang: ['en-gb'],
    name: 'foyles.co.uk',
    url: 'https://www.foyles.co.uk/all?term=##ISBN##',
  },
  {
    lang: ['en-gb'],
    name: 'uk.bookshop.org',
    url: 'https://uk.bookshop.org/books?keywords=##ISBN##',
  },

  // EN - US //////////////////
  {
    lang: ['en-us'],
    name: 'alibris.com',
    url: 'https://www.alibris.com/booksearch?keyword=##ISBN##',
  },
  {
    lang: ['en-us'],
    name: 'bookshop.org',
    url: 'https://bookshop.org/books?keywords=##ISBN##',
  },
  {
    lang: ['en-us'],
    name: 'powells.com (portland)',
    url: 'https://www.powells.com/searchresults?keyword=##ISBN##',
  },

  // EN - AUS //////////////////
  {
    lang: ['en-au'],
    name: 'boomerangbooks.com.au',
    url: 'https://www.boomerangbooks.com.au/search.cfm?s=##ISBN##',
  },
  {
    lang: ['en-au'],
    name: 'readings.com.au',
    url: 'https://www.readings.com.au/search/results?query=##ISBN##',
  },
  {
    lang: ['en-au'],
    name: 'angusrobertson.com.au',
    url: 'https://www.angusrobertson.com.au/search?text=##ISBN##',
  },
  {
    lang: ['en-au'],
    name: 'booktopia.com.au',
    url: 'https://www.booktopia.com.au/search.ep?keywords=##ISBN##',
  },

  // CA //////////////////
  {
    lang: ['en-ca', 'fr-ca'],
    name: 'Local Canadian bookstores',
    featured: true,
    url: 'https://www.penguinrandomhouse.ca/canadian-independent-bookstores-delivery',
  },

  // ES //////////////////
  {
    lang: ['es-es'],
    name: 'casadellibro.com',
    url: 'https://www.casadellibro.com/?q=##ISBN##',
  },
  {
    lang: ['es-es'],
    name: 'todostuslibros.com',
    url: 'https://www.todostuslibros.com/busquedas?keyword=##ISBN##',
  },
  {
    name: 'agapea.com',
    lang: ['es-es'],
    url: 'https://www.agapea.com/buscar/buscador.php?texto=##ISBN##',
  },

  // IT //////////////////
  {
    lang: ['it-it'],
    name: 'hoepli.it',
    url: 'https://www.hoepli.it/cerca/libri.aspx?query=##ISBN##',
  },
];

function arrayUnique(array) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
}
