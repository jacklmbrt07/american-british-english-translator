'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale} = req.body;
      let translation = translator.translate(text, locale)
      console.log(locale)
      return res.json({text, translation})

    });
};
