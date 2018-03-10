// this is the ES6 Version

class EasyHTTP {
    constructor(){
        
    }
    get(url){
        // fetch(url)
            // // async
            // .then(res => res.json())
            // .then(data => console.log(data))
            // .catch(err => console.log(err));
            
            // to fix sync need a Promise
            return new Promise((resolve, reject) => {
                
                fetch(url)
                    .then(res => res.json())
                    // need to resolve
                    .then(data => resolve(data))
                    .catch(err => reject(err));
            })
            
            // sync
            // .then(res => res.json())
            // .then(data => data)
            // .catch(err => err);
    }
    
    // POST
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }
    
    // PUT
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT', 
                headers: {
                    'Content-type':
                    'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    
    // delete
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource Removed'))
            .catch(err => reject(err));
        });
    }
}