var viewModal = document.getElementById("view-modal");

var viewButtons = document.querySelectorAll("[view-button]");


for (var i = 0; i < viewButtons.length; i++) {
    viewButtons[i].onclick = function () {
        document.getElementById("donor-name").innerHTML = "Becky James Mirabel";
        document.getElementById("amount-donated").innerHTML = "₦120,000.00";
        document.getElementById("donation-date").innerHTML = "Wednesday, 28th August 2019 5:30:27PM";
        viewModal.style.display = "block";
    }

    
    viewButtons[1].onclick = function () {
        document.getElementById("donor-name").innerHTML = "Opeyemi Ashogbon Folusho";
        document.getElementById("amount-donated").innerHTML = "₦50,000.00";
        document.getElementById("donation-date").innerHTML = "Sunday, 17th August 2019 5:30:27PM";
        viewModal.style.display = "block";
    }
    viewButtons[2].onclick = function () {
        document.getElementById("donor-name").innerHTML = "Ali Salami Nuhu";
        document.getElementById("amount-donated").innerHTML = "90,000.00";
        document.getElementById("donation-date").innerHTML = "Friday, 15th August 2019 5:30:27PM";
        viewModal.style.display = "block";
    }
    viewButtons[3].onclick = function () {
        document.getElementById("donor-name").innerHTML = "Rabiu Inuwa Zangina";
        document.getElementById("amount-donated").innerHTML = "₦120,000.00";
        document.getElementById("donation-date").innerHTML = "Thursday, 14th August 2019 5:30:27PM";
        viewModal.style.display = "block";
    }
    viewButtons[4].onclick = function () {
        document.getElementById("donor-name").innerHTML = "";
        document.getElementById("amount-donated").innerHTML = "₦120,000.00";
        document.getElementById("donation-date").innerHTML = "Thursday, 14th August 2019 5:30:27PM";
        viewModal.style.display = "block";
    }
}


var closeModal = document.getElementById("close");

closeModal.addEventListener("click", () => {
    viewModal.style.display = "none";
})


window.onclick = function(e){
    if (e.target == modal){
        modal.style.display = "none";
    }
}