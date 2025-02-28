/*
document.getElementById("get_data").addEventListener('click', loaddata);


function loaddata(e) {
    //xhr object creation == xml http request 
    let xhr = new XMLHttpRequest();
    //open
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {
        if (this.status === 200) {
            ///console.log(this.status);
            document.getElementById('output').innerHTML=`<h4>${this.responseText}</h4>?`
        }
    }

    xhr.send();
    console.log(xhr);
}
    */
document.getElementById('get_data').addEventListener('click', get_jokes);

function get_jokes(e) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random/', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let result = JSON.parse(this.responseText);
            console.log(result.value);
            
        }

    }
    xhr.send();
}