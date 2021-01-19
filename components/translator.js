const { trash } = require("./american-only.js");
const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

const terms = [];
Object.keys(americanOnly).forEach(key => {
    terms.push([key, americanOnly[key]])
});
Object.keys(americanToBritishSpelling).forEach(key => {
    terms.push([key, americanToBritishSpelling[key]])
});
Object.keys(britishOnly).forEach(key => {
    terms.push([britishOnly[key], key])
})

class Translator {
  americanToBritish(text) {
    let translation;
    var timeRegex = /(?<=\d)\:(?=\d{2})/g
    var titleRegex = /(?<=mr|mrs|ms|mx|dr|prof)\./gi

    translation = text.replace(timeRegex, ".").replace(titleRegex, "")

    terms.forEach(term => {
        translation = translation.replace(term[0], `<span class="highlight">${term[1]}</span>`)
    });

    return translation;
  }

  britishToAmerican(text) {
    let translation;
    var timeRegex = /(?<=\d)\.(?=\d{2})/g
    var titleRegex = /(?<=mr|mrs|ms|mx|dr|prof)/gi


    translation = text.replace(timeRegex, ":").replace(titleRegex, ".")

    terms.forEach(term => {
        translation = translation.replace(term[1], `<span class="highlight">${term[0]}</span>`)
    });
    
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

    console.log(terms)
    return translation;
  }
}

module.exports = Translator;
