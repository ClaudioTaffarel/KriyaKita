const colGridz = document.getElementById("colGrid");
const hamburger = document.querySelector(".hamburgerzz");
const navMenu = document.querySelector(".navContszz");
const header = document.querySelector('.headerzz');

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

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".navBtnzz").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});