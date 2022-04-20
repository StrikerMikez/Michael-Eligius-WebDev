const setup = () => {
    let names = passagiers.split(',');
var myTable = "<table><tr>";
var perrow = 2;
let myTable = document.createElement("table"),row = myTable.insertRow(), cell;
passagiers.forEach((value, i)=> { 
    var next = i + 1;
    if (next%perrow==0 && next!=data.length) { myTable += "</tr><tr>"; }  
});

document.getElementById("container").appendChild(myTable);
}
let names = passagiers.split(',');
var myTable = "<table><tr>";
var perrow = 2;
let myTable = document.createElement("table"),row = myTable.insertRow(), cell;
passagiers.forEach((value, i)=> { 
    var next = i + 1;
    if (next%perrow==0 && next!=data.length) { myTable += "</tr><tr>"; }  
});

document.getElementById("container").appendChild(myTable);


<button onclick= setup={}>Click me</button>