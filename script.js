document.addEventListener("DOMContentLoaded", () => {

const loginBtn = document.getElementById("loginBtn");

if (!loginBtn) return;

Pi.init({
version: "2.0",
sandbox: true
});

loginBtn.addEventListener("click", loginPi);

});

async function loginPi() {

try {

const scopes = ["username"];

const auth = await Pi.authenticate(scopes);

alert("Welcome " + auth.user.username);

document.getElementById("loginBtn").innerText =
"👤 " + auth.user.username;

} catch (e) {

console.log(e);

alert("Pi Login Cancelled");

}

}