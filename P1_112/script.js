
function display(event){
    let myform = document.getElementById("main");
    // console.log('hhh');
     event.preventDefault();
    
        const name = document.getElementById('name');
        const password = document.getElementById('password');
        const email = document.getElementById('mail');
        const number = document.getElementById('number');
        // const mail = document.getElementById('male').value;
        // const female = document.getElementById('female').value;

        myform.innerHTML = name.value;
        
        

   
}
    
    
// const name = document.getElementById("#name");
    
//     document.getElementById("#name").textContent = "Name: "+ name ;
    
//     const mail = document.getElementById("#mail");

    
//     document.getElementById("mail").textContent = "Mail :"+ mail ;
//     console.log("Name: ", +name);
//     console.log("Mail :", +mail);
// });


// }
