class Github{
    constructor(){
        this.client_id = '1408fc4247987368f924';
        this.client_secret = '41fb6d375bdc6f24ef4123c308aad747bb854e40';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
        &sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();
        
        return {
            profile: profileData, 
            repos: repoData
        }
    }
}