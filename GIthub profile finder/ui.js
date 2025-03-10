class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
    }
    showprofile(user) {
        this.clearalert();
        this.profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
      <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
      <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
      <span class="badge badge-success">Followers: ${user.followers}</span>
      <span class="badge badge-info">Following: ${user.following}</span>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">Website/Blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
      </ul>
    </div>
        </div>
        </div>
        `;
    }
    clearprofile(){
        this.profile.innerHTML='';
    }
    showalert(message,className){
        this.clearalert();
        this.clearprofile();
        let div=document.createElement('div');
        div.className=className;
        div.appendChild(document.createTextNode(message));
        let container= document.querySelector('.searchContainer');
        let search=document.querySelector('.search');
        container.insertBefore(div,search);

    }
    clearalert(){
        let currentalert=document.querySelector('.alert');
        if(currentalert){
            currentalert.remove();
        }
    } 

}