document.addEventListener("DOMContentLoaded", () => {

    if (typeof Pi !== "undefined") {

        Pi.init({
            version: "2.0",
            sandbox: true
        });

    }

    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {

        loginBtn.addEventListener("click", loginPi);

    }

});

async function loginPi() {

    try {

        const auth = await Pi.authenticate(
            ["username"],
            function onIncompletePaymentFound(payment) {
                console.log("Incomplete payment:", payment);
            }
        );

        document.getElementById("loginBtn").innerHTML =
            "👤 " + auth.user.username;

        alert("Welcome " + auth.user.username);

    } catch (error) {

        console.error(error);

        alert("Pi Login Cancelled or Failed");

    }

}