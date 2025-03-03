let searchbtn=document.querySelector('#searchBtn');
let searchuser = document.querySelector('#searchUser');
let ui= new UI();
searchbtn.addEventListener('click',(e)=>{
    let usertext=searchuser.value;
    if(usertext!=''){
        fetch(`https://api.github.com/users/${usertext}`)
        .then(result=>result.json())
        .then(data=>{
            if(data.message=='Not Found'){
                ui.showalert("User not found!","alert alert-danger"); 
            }
            else{
                ui.showprofile(data);
            }
        })
    }
    else{
        ui.clearprofile();
    }
})