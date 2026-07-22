// Alberto NFT Marketplace v2

let currentUser = null;

// Initialize Pi SDK
window.addEventListener("load", () => {
    try {
        Pi.init({
            version: "2.0",
            sandbox: true // Palitan ng false kapag Mainnet
        });

        console.log("✅ Pi SDK Initialized");

        const loginBtn = document.getElementById("loginBtn");

        if (loginBtn) {
            loginBtn.addEventListener("click", loginPi);
        }

        const buyButtons = document.querySelectorAll(".card button");

        buyButtons.forEach((btn, index) => {
            btn.addEventListener("click", () => buyNFT(index + 1));
        });

    } catch (err) {
        console.error("Pi SDK Error:", err);
    }
});

// Login with Pi
async function loginPi() {

    try {

        const auth = await Pi.authenticate(
            ["username", "payments"],
            onIncompletePaymentFound
        );

        currentUser = auth.user;

        document.getElementById("loginBtn").textContent =
            "👤 " + currentUser.username;

        alert("Welcome " + currentUser.username + "!");

    } catch (err) {

        console.error(err);

        alert("Pi Login failed or cancelled.");

    }

}

// Buy NFT
function buyNFT(id) {

    if (!currentUser) {

        alert("Please login with Pi first.");

        return;

    }

    alert(
        "NFT #" + id +
        "\n\nPi Payment integration will be added in the next update."
    );

}

// Required callback
function onIncompletePaymentFound(payment) {

    console.log("Incomplete Payment:", payment);

}