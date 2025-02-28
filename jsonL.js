/*let student ={
    name:"sessss", age:"seees", city: "piot"
};
var student_json= JSON.stringify(student);
console.log(student_json);

var student_new= JSON.parse(student_json);
console.log(student_new);*/

var xmlhttp =new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var mdata=this.responseText;
        //console.log(mdata);
        jasondata(mdata);
    }
};
xmlhttp.open("GET","data.json",true);
xmlhttp.send();

function jasondata(json_obj){
    //console.log(json_obj);
    var jsonobject =JSON.parse(json_obj);
    //console.log(jsonobject);
    for(x in jsonobject.persons){
        var persons=jsonobject.persons;
        //console.log(jsonobject.persons[x]);
        for(y in persons[x]){
            console.log(persons[x][y]);
        }
        //console.log(persons[x]); 
    }

}