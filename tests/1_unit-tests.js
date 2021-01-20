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

    test("Translate 'We had a party at my friend's condo.' to British English", (done) => {
      assert.equal(
        translator
          .translate("We had a party at my friend's condo.", locale[0])
          .replace(spanRegex, ""),
        "We had a party at my friend's flat."
      );
      done();
    });

    test("Translate 'Can you toss this in the trashcan for me?' to British English", (done) => {
      assert.equal(
        translator
          .translate("Can you toss this in the trashcan for me?", locale[0])
          .replace(spanRegex, ""),
        "Can you toss this in the bin for me?"
      );
      done();
    });

    test("Translate 'The parking lot was full.' to British English", (done) => {
      assert.equal(
        translator
          .translate("The parking lot was full.", locale[0])
          .replace(spanRegex, ""),
        "The car park was full."
      );
      done();
    });

    test("Translate 'Like a high tech Rube Goldberg machine.' to British English", (done) => {
      assert.equal(
        translator
          .translate("Like a high tech Rube Goldberg machine.", locale[0])
          .replace(spanRegex, ""),
        "Like a high tech Heath Robinson device."
      );
      done();
    });

    test("Translate 'To play hooky means to skip class or work.' to British English", (done) => {
      assert.equal(
        translator
          .translate("To play hooky means to skip class or work.", locale[0])
          .replace(spanRegex, ""),
        "To bunk off means to skip class or work."
      );
      done();
    });

    test("Translate 'No Mr. Bond, I expect you to die.' to British English", (done) => {
        assert.equal(
          translator
            .translate("No Mr. Bond, I expect you to die.", locale[0])
            .replace(spanRegex, ""),
          "No Mr Bond, I expect you to die."
        );
        done();
      });
  });

  suite("British to American english tests", () => {});

  suite("Highlighted translation tests", () => {});
});
