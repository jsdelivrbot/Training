// console.log("jaja");
// var jsonExample = {
//     "firstName": "Seth",
//     "lastName": "Borne",
//     "company": "Mine"
// }

var arrayOfEmployees = {
    "employees": [
        { "name": "John Smith", "position": "President" },
        { "name": "Mary Johnson", "position": "Accountant" },
        { "name": "Fred Mertz", "position": "Housekeeper" }
    ]
}

// alert(arrayOfEmployees.employees[1]["name"]);

for(let i = 0; i < arrayOfEmployees.employees.length; i += 1){
    document.write("<br/>Name: " + arrayOfEmployees.employees[i].name );
    document.write("<br/>Position: " + arrayOfEmployees.employees[i].position );
}