
const name = document.getElementById("fullName");



const clearField = () => {
    const erFeilds = document.querySelectorAll(".red");
    erFeilds.forEach(e => {
        e.style.display = "none";
    })
}

const validateEmail = (event) => {
    const email = document.getElementById("email");
    let er = email.nextElementSibling;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let tested = re.test(String(email.value).toLowerCase());

    if(!tested) {
        event.preventDefault();
        er.style.display = "block";
        er.innerHTML = "Invalid email address";
    } else {
        er.style.display = "none";
    }
}




const validateNameTitle = (id, event) => {

    if (id.value.length >= 4) {
        return true;
    } else {
        event.preventDefault();
        let er = id.nextElementSibling;
        er.style.display = "block";
        er.innerHTML = "input less than 4 characters";
    }
}
const validateRadiobtn = (event) => {
    let radioBtns = document.querySelectorAll("input[type=radio]");
    let amt = document.getElementById("otherAmt");
    let red = document.getElementById("red");
    radioBtns.forEach(e =>{
        if(e.checked || amt.value.length > 3){
            console.log(e.checked);
            console.log(amt.value.length > 3);
        }else{
            event.preventDefault();
         red.display = "block";
         red.innerHTML = "Please select an amount or input and amount below";
        }
    })

}
const validateMsg = (event) => {
    const msg = document.getElementById("message");
    let er = msg.nextElementSibling;
    if (msg.value.length >= 20) {
        return true;
    } else {
        event.preventDefault();
        er.style.display = "block";
        er.innerHTML = "input less than 4 characters";
    }
}



const validateDonateForm = (event) => {
    clearField();
    validateNameTitle(name, event);
    validateEmail(event);
    validateRadiobtn(event);
}

const btn = document.getElementById("submit");
btn.addEventListener("click", validateDonateForm);