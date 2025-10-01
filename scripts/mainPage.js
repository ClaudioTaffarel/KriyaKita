document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    const navbarUsername = document.getElementById("navbarUsername");
    if (navbarUsername) {
        navbarUsername.textContent = user.username;
    }
});
