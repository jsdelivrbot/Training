class GitHub {
    constructor(){
        this.client_id = '742310f5c082bf176598';
        this.client_secret = 'a44fa0abf29c7395608ba99252dbf9e3ba9fe03e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    // get users?
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profileData = await profileResponse.json();
        
        const reposData = await reposResponse.json();
        
        return {
            // can return just { profile if key and value are the same. const above would be profile, not profileData }
            profile: profileData,
            repos: reposData
        }
    }

    // https://api.github.com/users/{name}
    // https://api.github.com/users/{name}/{repos}
}