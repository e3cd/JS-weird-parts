/**
 * Library that helps us give greetings,
 *
 * Official requirements
 *
 * When given a first name, last name, and optional language it generates formal and informal greetings
 *
 * Reusable library/framework
 *
 * Easy to type 'G$()'
 */

(function(global, $) {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  var supportedLangs = ["en", "es"];

  var greetings = {
    en: "hello",
    es: "hola"
  };

  var formalGreetings = {
    en: "greetings",
    es: "saludos"
  };

  var logMessages = {
    en: "Logged in,",
    es: "spanish"
  };

  Greetr.prototype = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    validate: function {
       if(supportedLangs.indexOf(this.language) === -1 ){
        throw 'Invalid language'
        }
    },

    greeting: function() {
        return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
        return formalGreetings[this.language] + ', '  +this.fullName();
    },

    greet: function(formal) {
        var msg;

        //if undefined or null it will be coerced to 'false'
        if (formal) {
            msg = this.formalGreeting();
        } else {
            msg = this.greeting()
        }

        if (console) {
            console.log(msg)
        }

        //'this' refers to the calling object at execution time, makes the method chainable
        return this;
    },

    log: function() {
        if(console) {
            console.log(logMessages[this.language] + ': ' + this.fullName())
        }

        return this;
    },

    setLang: function(lang) {
        this.language = lang;
        this.validate();

        return this;
    }


  };

  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
  };
  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
