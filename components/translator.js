const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {

  americanToBritish(text) {
    let translation;
    var timeRegex = /(?<=\d)\:(?=\d{2})/g
    var titleRegex = /(?<=mr|mrs|ms|mx|dr|prof)\./gi

    translation = text.replace(timeRegex, ".")
    translation = text.replace(titleRegex, "")
    
    return translation;
  }

  britishToAmerican(text) {
    let translation;
    var timeRegex = /(?<=\d)\.(?=\d{2})/g

    translation = text.replace(timeRegex, ":")
    
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

    return translation;
  }
}

module.exports = Translator;
