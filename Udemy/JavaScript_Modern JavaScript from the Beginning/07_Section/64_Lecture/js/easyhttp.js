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
easyHTTP.prototype.post = function(url, postData, callback){
    this.http.open('POST', url, true);
    
    // set content type
    // access via .setRequestHeader
    this.http.setRequestHeader('Content-type', 'application/json');
    
    let self = this;
    this.http.onload = function(){
        // responseText is new Null
        callback(null, self.http.responseText);
        
    }
    
    
    // need to stringify the object (data) to make it JSON
    this.http.send(JSON.stringify(postData));
}

// PUT
easyHTTP.prototype.put = function(url, updateData, callback){
    this.http.open('PUT', url, true);
    // set content type
    this.http.setRequestHeader('Content-type', 'application/json');
    // 
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    // need to stringify the JS object (updateData) to make it JSON
    this.http.send(JSON.stringify(updateData));
}

// DELETE
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);
    
    let self = this;
    // in ES5 - you use self, because this refers to insdie function scope...?
    this.http.onload = function(){
        // arrow functions fix this error by using a lexical this
        if(self.http.status === 200){
            // this will be an empty object (self.http.responseText)
            callback(null, 'Post Deleted');
        }
        else {
            callback('Error: ' + self.http.status);
        }
    };
    
    this.http.send();
}