// Alberto NFT Marketplace - Debug Version

let currentUser = null;

window.addEventListener("load", () => {

    const loginBtn = document.getElementById("loginBtn");

    if (!loginBtn) {
        alert("Login button not found.");
        return;
    }

    loginBtn.addEventListener("click", loginPi);

    if (typeof Pi === "undefined") {
        alert("Pi SDK is NOT loaded.");
        return;
    }

    try {
        Pi.init({
            version: "2.0",
            sandbox: true
        });

        console.log("Pi SDK Ready");

    } catch (e) {
        alert("Pi SDK Init Error: " + e.message);
    }

});

async function loginPi() {

    alert("Login button clicked!");

    if (typeof Pi === "undefined") {
        alert("Pi SDK not detected.");
        return;
    }

    try {

        const auth = await Pi.authenticate(
            ["username", "payments"],
            onIncompletePaymentFound
        );

        currentUser = auth.user;

        document.getElementById("loginBtn").textContent =
            "👤 " + currentUser.username;

        alert("Welcome " + currentUser.username);

    } catch (err) {

        alert("Authentication Error");
        console.error(err);

    }

}

function onIncompletePaymentFound(payment) {
    console.log(payment);
}