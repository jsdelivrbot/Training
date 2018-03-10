document.getElementById('button1').addEventListener('click', getText);

function getText(){
    fetch('test.txt')
    // fetch('test1.txt')
        .then(function(response){
            // console.log(response.text());
            return response.text();
        })
        .then(function(data){
            // this is our data
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function(err){
            console.log(err);
        })
}

document.getElementById('button2').addEventListener('click', getJson);

function getJson(){
    fetch('posts.json')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            let outputString = '';
            data.forEach(function(item){
                outputString += `
                    <h4>${item.title}</h4>
                    <li>${item.body}</li>
                `
            })
            document.getElementById('output').innerHTML = outputString;
        })
        .catch(function(err){
            console.log(err);
        })
}

document.getElementById('button3').addEventListener('click', getExternal);

function getExternal(){
    fetch('https://api.github.com/users')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            let outputString = '';
            data.forEach(function(item){
                outputString += `
                    <h4>${item.id}</h4>
                    <li>${item.login}</li>
                `
            })
            document.getElementById('output').innerHTML = outputString;
        })
        .catch(function(err){
            console.log(err);
        })
}