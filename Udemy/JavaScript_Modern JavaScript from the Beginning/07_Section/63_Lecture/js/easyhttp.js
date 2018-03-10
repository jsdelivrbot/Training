// this is the ES5 version

function easyHTTP(){
    // prop
    this.http = new XMLHttpRequest();
}

// four prototype methods
// GET
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    
    let self = this;
    // in ES5 - you use self, because this refers to insdie function scope...?
    this.http.onload = function(){
        // arrow functions fix this error by using a lexical this
        if(self.http.status === 200){
            // console.log(self.http.responseText);
            // return self.http.responseText;
            // ^-- this will (without a callback in get, return posts as undefined)
            callback(null, self.http.responseText);
        }
        else {
            callback('Error: ' + self.http.status);
        }
    };
    
    this.http.send();
};

// POST
easyHTTP.prototype.post = function(){
    
}

// PUT
easyHTTP.prototype.put = function(){
    
}

// DELETE
easyHTTP.prototype.delete = function(){
    
}