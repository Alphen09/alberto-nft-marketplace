// Alberto NFT Marketplace v2 Alpha

document.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to Alberto NFT Marketplace v2 Alpha");

    // Hero Buttons
    const buttons = document.querySelectorAll(".hero-buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("This feature is coming soon!");
        });
    });

    // Login Button
    const loginBtn = document.querySelector(".login-btn");

    loginBtn.addEventListener("click", () => {
        alert("Pi Login will be available in a future update.");
    });

});