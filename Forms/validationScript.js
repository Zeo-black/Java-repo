 let nameInput = document.getElementById("inputField");
    
  let form = document.getElementById("myForm");
  form.addEventListener('submit', function(event){
    if(nameInput.value == ''){ 
      alert("Please enter an Alphanumeric Input");
      event.preventDefault();
    }
 });

    nameRegex = /^[a-zA-z0-9]/;
    nameInput.addEventListener('blur', function(){
     if(!nameRegex.test(nameInput.value)){
       alert('Invaild input! please try again!')
      }else{
        alert('The alphnumberic input was vaild and has been submitted!')
        
    }
});
