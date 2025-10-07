const colGridz = document.getElementById("colGrid");

koleksiz.slice(0, 9).forEach(itemz => {
    const cardz = document.createElement("div");
    cardz.classList.add("colCardzz");

    cardz.innerHTML = `
        <img src="${itemz.image}" alt="${itemz.name}">
        <h3>${itemz.name}</h3>
        <p class="originzz">${itemz.originProvince}</p>
    `;
    
    cardz.onclick = () => {
        window.location.href = `colDetailz.html?id=${itemz.id}`;
    };
    
    colGridz.appendChild(cardz);
});

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
