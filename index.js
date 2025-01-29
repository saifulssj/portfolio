const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    console.log("Menu button clicked!"); // Check if this appears in the console
    nav.classList.toggle("active");
});