// Alberto NFT Marketplace
// Pi SDK Script

let currentUser = null;

// Initialize Pi SDK
window.onload = function () {
    try {
        Pi.init({
            version: "2.0",
            sandbox: true // Palitan ng false kapag Mainnet na
        });

        console.log("Pi SDK Initialized");
    } catch (e) {
        console.error(e);
    }
};

// Login Button
document.getElementById("loginBtn").addEventListener("click", loginPi);

async function loginPi() {

    try {

        const auth = await Pi.authenticate(
            ["username", "payments"],
            onIncompletePaymentFound
        );

        currentUser = auth.user;

        document.getElementById("loginBtn").innerHTML =
            "👤 " + currentUser.username;

        alert("Welcome " + currentUser.username + "!");

    } catch (err) {

        console.error(err);

        alert("Login cancelled.");

    }

}

// Buy Buttons
const buyButtons = document.querySelectorAll(".card button");

buyButtons.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        if (!currentUser) {

            alert("Please login with Pi first.");

            return;

        }

        alert("NFT #" + (index + 1) + " selected.\nPi Payment will be connected in the next update.");

    });

});

// Required callback
function onIncompletePaymentFound(payment) {

    console.log("Incomplete payment:", payment);

}