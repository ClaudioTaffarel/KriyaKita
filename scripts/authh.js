document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const page = window.location.pathname.split("/").pop();

    if (!user && page !== "index.html" && page !== "register.html") {
        window.location.href = "index.html";
        return;
    }

    const loginForm = document.getElementById("loginFormm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("loginUsernamezz").value.trim();
        const password = document.getElementById("loginPasswordzz").value.trim();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const found = users.find(
            (u) => u.username === username && u.password === password
        );

        if (found) {
            localStorage.setItem("loggedInUser", JSON.stringify(found));
            window.location.href = "mainPage.html";
        } else {
            alert("Username atau password salah!");
        }
        });
    }

    const registerForm = document.getElementById("registerFormm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("regUsernamezz").value.trim();
        const gmail = document.getElementById("regEmailzz").value.trim();
        const password = document.getElementById("regPasswordzz").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some((u) => u.username === username)) {
            alert("Username sudah dipakai!");
            return;
        }
        if (users.some((u) => u.gmail === gmail)) {
            alert("Email sudah dipakai!");
            return;
        }

        const newUser = { username, gmail, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registrasi berhasil! Silakan login.");
        window.location.href = "index.html";
        });
    }

    if (user) {
        const navbarUsername = document.getElementById("navbarUsername");
        if (navbarUsername) {
        navbarUsername.textContent = user.username;
        }

        const userWelcome = document.getElementById("userWelcome");
        if (userWelcome) {
        userWelcome.textContent = user.username;
        }

        const detailUsername = document.getElementById("detailUsername");
        if (detailUsername) {
        detailUsername.textContent = user.username;
        }

        const detailGmail = document.getElementById("detailGmail");
        if (detailGmail) {
        detailGmail.textContent = user.gmail;
        }

        const logoutBtn = document.getElementById("logoutBtn");
        if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
        }
    }
});
