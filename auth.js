// ROADRESQ Authentication Demo

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;

        const user = {
            name,
            email,
            phone,
            password
        };

        localStorage.setItem(
            "roadresqUser",
            JSON.stringify(user)
        );

        alert("Account created successfully! 🚗");

        window.location.href = "login.html";
    });
}


const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        const savedUser =
            JSON.parse(localStorage.getItem("roadresqUser"));

        if (
            savedUser &&
            savedUser.email === email &&
            savedUser.password === password
        ) {

            localStorage.setItem(
                "roadresqLoggedIn",
                "true"
            );

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid email or password.");

        }

    });
}
