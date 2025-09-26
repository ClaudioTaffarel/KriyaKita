const colGridAll = document.getElementById("colGridAll");
const filterPulau = document.querySelector(".filterPulauzz");
const searchInput = document.querySelector(".searchInputzz");
const searchBtn = document.querySelector(".searchBtnzz");

// render card
function renderCards(data) {
  colGridAll.innerHTML = "";
  if (data.length === 0) {
    colGridAll.innerHTML = "<p>Tidak ada koleksi yang sesuai.</p>";
    return;
  }

  data.forEach(itemz => {
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

    colGridAll.appendChild(cardz);
  });
}

// filter + search
function applyFilter() {
  const selectedPulau = filterPulau.value.toLowerCase();
  const keyword = searchInput.value.toLowerCase().trim();

  const filtered = koleksiz.filter(item => {
    const matchPulau = selectedPulau === "" 
      || (item.originIsland && item.originIsland.toLowerCase().includes(selectedPulau));
    const matchKeyword = keyword === "" 
      || item.name.toLowerCase().includes(keyword);
    return matchPulau && matchKeyword;
  });

  renderCards(filtered);
}

// klik tombol cari
searchBtn.addEventListener("click", applyFilter);

// pertama load: tampil semua
renderCards(koleksiz);
