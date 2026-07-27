document.addEventListener("DOMContentLoaded", () => {

    Pi.init({
        version: "2.0",
        sandbox: true
    });

    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", loginPi);
    }

});

async function loginPi() {

    try {

        const scopes = ["username"];

        const auth = await Pi.authenticate(
            scopes,
            function onIncompletePaymentFound(payment) {
                console.log("Incomplete payment:", payment);
            }
        );

        console.log(auth);

        document.getElementById("loginBtn").innerHTML =
        "👤 " + auth.user.username;

        alert("Welcome " + auth.user.username);

    } catch (error) {

        console.error(error);

        alert("Pi Login Cancelled or Failed");

    }

}