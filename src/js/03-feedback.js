import  throttle  from 'lodash.throttle'


const formSet = document.querySelector(".feedback-form");

formSet.addEventListener("input", (e) => {
    e.preventDefault()
   
    const { email, message, } = formSet.elements;

    const obj = {
        email: email.value,
        message: message.value,
    }
    
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
});

const ttt = localStorage.getItem("feedback-form-state");
  const rrr = JSON.parse(ttt);
   formSet.elements.email.value = rrr.email,
    formSet.elements.message.value = rrr.message;  

 formSet.addEventListener("submit", (er) => {
     er.preventDefault();

  localStorage.removeItem("feedback-form-state");
     formSet.elements.email.value = "";
         formSet.elements.message.value = "";
     
     console.log(localStorage.getItem(JSON.parse("feedback-form-state")));
     });


    


