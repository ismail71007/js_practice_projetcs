/*callback function 
let persons = [
    { first_name: "ismail", lastname: "md" }, {
        first_name: "fazle", lastname: "rahat"
    }
];
function createperson(person) {
    setTimeout(function () {
        persons.push(person);
    }, 5500);
}

function getperson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.first_name} ${person.lastname}</li>`
        });
        document.getElementById('output').innerHTML = output;

    }, 1000);
}

createperson({first_name:"rony",lastname:"talukdar"});
getperson(); */
//callback function 

/*

let persons = [
    { first_name: "ismail", lastname: "md" }, {
        first_name: "fazle", lastname: "rahat"
    }
];
function createperson(person) {
    let promise = new Promise(function (resolve, reject) {
        persons.push(person);
        let error = true;
        if (!error) { resolve(); }
        else { reject('something wrong :_('); }

    });
    return promise;
}

function getperson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.first_name} ${person.lastname}</li>`
        });
        document.getElementById('output').innerHTML = output;

    }, 1000);
}

createperson({ first_name: "rony", lastname: "talukdar" }).then(getperson).catch(function (error) {
    console.log(error);
});
*/


document.getElementById('get_data').addEventListener('click', getdata);

function getdata() {
    fetch('https://api.chucknorris.io/jokes/random/')
    .then(res => res.json())
    .then(data => {console.log(data.value);})
    .catch(err => {console.log(err);
    })
}