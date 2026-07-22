// Alberto NFT Marketplace - Pi Login Debug

let currentUser = null;

window.addEventListener("load", () => {

    const loginBtn = document.getElementById("loginBtn");

    if (!loginBtn) {
        alert("Login button not found.");
        return;
    }

    if (typeof Pi === "undefined") {
        alert("Pi SDK not loaded.");
        return;
    }

    try {
        Pi.init({
            version: "2.0",
            sandbox: true
        });

        console.log("Pi SDK Initialized");
    } catch (err) {
        alert("Pi.init Error: " + err.message);
        return;
    }

    loginBtn.addEventListener("click", loginPi);

});

async function loginPi() {

    alert("Login button clicked!");

    if (typeof Pi === "undefined") {
        alert("Pi SDK not detected.");
        return;
    }

    alert("Pi SDK detected.");

    try {

        alert("Before authenticate");

        const auth = await Pi.authenticate(
            ["username"],
            onIncompletePaymentFound
        );

        alert("After authenticate");

        currentUser = auth.user;

        document.getElementById("loginBtn").textContent =
            "👤 " + currentUser.username;

        alert("Welcome " + currentUser.username);

    } catch (err) {

        console.error(err);

        if (err && err.message) {
            alert("Authentication Error: " + err.message);
        } else {
            alert("Authentication Error");
        }

    }

}

function onIncompletePaymentFound(payment) {
    console.log("Incomplete Payment:", payment);
}