const colGridAll = document.getElementById("colGridAll");
const favKoleksi = JSON.parse(localStorage.getItem("favKoleksi")) || [];

favKoleksi.forEach(id => {
    const item = koleksiz.find(k => k.id === id);
    if (item) {
        const cardz = document.createElement("div");
        cardz.classList.add("colCardzz");

        cardz.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="originzz">${item.originProvince}</p>
        `;

        cardz.onclick = () => {
            window.location.href = `../colDetailz.html?id=${item.id}`;
        };

        colGridAll.appendChild(cardz);
    }
});
