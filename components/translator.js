const { trash } = require("./american-only.js");
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

const terms = [];
Object.keys(americanOnly).forEach((key) => {
  terms.push([key, americanOnly[key]]);
});
Object.keys(americanToBritishSpelling).forEach((key) => {
  terms.push([key, americanToBritishSpelling[key]]);
});
Object.keys(britishOnly).forEach((key) => {
  terms.push([britishOnly[key], key]);
});
Object.keys(americanToBritishTitles).forEach((key) => {
  terms.push([key, americanToBritishTitles[key]]);
});

class Translator {
  americanToBritish(text) {
    let translation = text;

    terms.forEach((term) => {
      translation = translation.replace(
        term[0],
        `<span class="highlight">${term[1]}</span>`
      );
      translation = translation.replace(
        term[0].charAt(0).toUpperCase() + term[0].slice(1),
        `<span class="highlight">${term[1].charAt(0).toUpperCase() + term[1].slice(1)}</span>`
      );
    });

    var timeRegex = /(([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]))/g;
    let times = translation.match(timeRegex);
    if (times) {
      times.forEach((time) => {
        translation = translation.replace(
          time,
          `<span class="highlight">${time.replace(":", ".")}</span>`
        );
      });
    }

    return translation;
  }

  britishToAmerican(text) {
    let translation = text;

    terms.forEach((term) => {
      translation = translation.replace(
        term[1],
        `<span class="highlight">${term[0]}</span>`
      );
      translation = translation.replace(
        term[1].charAt(0).toUpperCase() + term[1].slice(1),
        `<span class="highlight">${term[0].charAt(0).toUpperCase() + term[0].slice(1)}</span>`
      );
    });

    var timeRegex = /(([0-9]|0[0-9]|1[0-9]|2[0-3])(\.)([0-5][0-9]))/g;
    let times = translation.match(timeRegex);
    if (times) {
      times.forEach((time) => {
        translation = translation.replace(
          time,
          `<span class="highlight">${time.replace(".", ":")}</span>`
        );
      });
    }

    return translation;
  }

  translate(text, locale) {
    let translation;

    if (locale === "american-to-british") {
      translation = this.americanToBritish(text);
    }

    if (locale === "british-to-american") {
      translation = this.britishToAmerican(text);
    }

    if (translation === text) {
      translation = "Everything looks good to me!";
    }

    return translation;
  }
}

module.exports = Translator;
