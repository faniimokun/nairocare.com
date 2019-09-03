window.addEventListener('load', () => {
    // console.log('Were are you doing?');
})

const displayNavItems = () => {
    let navToggle = document.getElementById("nav-items");
    if (navToggle.style.display === "flex") {
        navToggle.style.display = "none";
    } else {
        navToggle.style.display = "flex";
    }
}
