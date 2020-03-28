//Search Input
const searchUser = document.getElementById('searchUser');

//Initialize Github
const github = new Github();

//Init UI
const ui = new UI();
//Search Input event handler
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    if(userText !== ''){
        // console.log(userText);
        //Make http call
        github.getUser(userText)
         .then(data => {
             if (data.profile.message === 'Not Found') {
                 //Show alert user not find
                //  alert('User not found');
                ui.showAlert('User not found', 'alert alert-danger')
             } else {
                //Show profile
                console.log(data);  
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);  
             }
             
         })
    }else{
        //Clear profile
        ui.clearProfile();
    }
})