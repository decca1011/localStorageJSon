
function test(){
    //retrivewing data
    var uid=document.getElementById("username").value;
    var pwd=document.getElementById('password').value
    var eml=document.getElementById('email').value
    
    alert(uid + pwd + eml);
    // storing data
    
    var user =localStorage.setItem('uid',uid);
    var pass =localStorage.setItem('pwd',pwd);
    var em   =localStorage.setItem('eml',eml);
     // retreiving stored data and using it for calculation
     var user =localStorage.getItem('uid',uid);
     var pass =localStorage.getItem('pwd',pwd);
     var em   =localStorage.getItem('eml',eml);
    
    var myObj ={
        name: user,
        pass: pass,
        em : em
    
    }
   

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem('myObj',myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));

console.log(myObj_deserialized)
    
  
    }
//     var myObj ={
//         name:'domenic',
//         age: 56
//     };

// let myObj_serialized = JSON.stringify(myObj);

// localStorage.setItem('myObj',myObj_serialized);

// let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));

// console.log(myObj_deserialized)
