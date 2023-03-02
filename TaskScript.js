function loadDoc() {
    const http1 = new XMLHttpRequest();

    http1.onload = function() {
        
        const obj=JSON.parse(this.response);
        //document.getElementById("jdata").innerText=obj[0].name;
        disFunction(obj);
    };
    http1.open("GET","https://jsonplaceholder.typicode.com/users");
    http1.send();
  }
  function disFunction(obj){
    let table="<tr><th>Id</th><th>Name</th><th>UserName</th><th>Email</th><th>Address</th><th>Phone</th><th>Website</th><th>Company</th></tr>";
    for(let i=0;i<obj.length;i++){
    var address=obj[i].address;
    var company=obj[i].company;
        table += "<tr><td>" +obj[i].id+"</td><td>" +obj[i].name+"</td><td>" +obj[i].username
        +"</td><td>"+obj[i].email+"</td><td>" +JSON.stringify(address)+"</td><td>" +obj[i].phone+"</td><td>" +obj[i].website+"</td><td>"+JSON.stringify(company)+"</td></tr>";
        }
    document.getElementById("jdata").innerHTML = table;
  }

 