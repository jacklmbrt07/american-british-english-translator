const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
const locale = ["american-to-british", "british-to-american"];
const spanRegex = /<\/?span[^>]*>/g;

suite("Unit Tests", () => {
  suite("American to British english tests", () => {
    test("Translate 'Mangoes are my favorite fruit.' to British English", (done) => {
      assert.equal(
        translator
          .translate("Mangoes are my favorite fruit.", locale[0])
          .replace(spanRegex, ""),
        "Mangoes are my favourite fruit."
      );
      done();
    });

    test("Translate 'I ate yogurt for breakfast.' to British English", (done) => {
      assert.equal(
        translator
          .translate("I ate yogurt for breakfast.", locale[0])
          .replace(spanRegex, ""),
        "I ate yoghurt for brekkie."
      );
      done();
    });
  });

  suite("British to American english tests", () => {});

  suite("Highlighted translation tests", () => {});
});
