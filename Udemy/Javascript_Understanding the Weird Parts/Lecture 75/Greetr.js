// create new execution context for framework/library - so all variables are safe and only exposing to global what we want
// start - wrap some code to make safe, and pass what we need access too, global and $

(function( global, $ ){
    // imitate jQuery Structure
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }
    
    // these are hidden from other developers (unless they come to source)
    var supportedLangs = ['en', 'es'];
    
    // declare greetings objects, not exposed to outside 
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // log 
    
    var logMessages = {
        en: 'Logged In:',
        es: 'Inicio sesion:'
    };
    
    // any methods
    Greetr.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        validate: function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw 'Invalid Language'
            }
        },
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal){
            var msg;
            // if undefined or null it will be coerced to 'false'
            if(formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if(console){
                console.log(msg);
            }
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        }
    };
    
    Greetr.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };
    
    // any objects created with this function should point to the Greetr prototype
    
    Greetr.init.prototype = Greetr.prototype;
    
    // make something available everywhere attach it the global object
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));