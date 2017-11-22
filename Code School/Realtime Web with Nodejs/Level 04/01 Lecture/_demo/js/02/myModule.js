var foo = function(){
    console.log("foo");
}

var bar = function(){
    console.log("bar");
}

var baz = function(){
    console.log("baz");
}

// export functions (make them public)

exports.foo = foo;
exports.bar = bar;