// window.addEventListener("scroll", function() {
//     const card = document.getElementById("animated-card");
//     const scrollY = window.scrollY;

//     // Adjust the transformation based on scroll position
//     card.style.transform = `translateY(${scrollY * 0.5}px)`;
// });

// Function to show the popup after a delay
function showPopup() {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "flex";
}

// Call the showPopup function after a 3-second delay
setTimeout(showPopup, 3000);

// Add event listener to close the popup
const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "none";
});

// Hide the preloader after 4 seconds
window.addEventListener("load", function () {
    setTimeout(function () {
        const preloader = document.querySelector(".preloader");
        preloader.style.display = "none";
    }, 4000); // 4 seconds (4000 milliseconds)
});
