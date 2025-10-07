const paramsz = new URLSearchParams(window.location.search);
const idz = parseInt(paramsz.get("id"));
const itemz = koleksiz.find(k => k.id === idz);

const detailBoxz = document.getElementById("colDetailzz");

if (itemz) {
    detailBoxz.innerHTML = `
        <div class="detailHerozz" style="background-image: url('${itemz.image}')">
            <div class="overlayzz"></div>
            <div class="heroTextzz">
                <h1>${itemz.name}</h1>
                <p>${itemz.originProvince} | ${itemz.originIsland}</p>
                <br>
            </div>
            <img src="assets/blackFade.png" alt="fade" class="blackFadezz">
        </div>

        <section class="desczz">
            <div class="descContentzz">
                <div class="descImgzz">
                    <img src="${itemz.image}" alt="${itemz.name}">
                </div>
                <div class="descTextzz">
                    <h2><span class="highlightzz">Deskripsi dan Filosofi</span></h2>
                    <p>${itemz.description}</p>
                </div>
            </div>
        </section>

        <section class="detailMorezz">
            <h2><span class="highlightzz">Bahan</span></h2>
            <p>${itemz.materials}</p>
            <h2><span class="highlightzz">Proses Pembuatan</span></h2>
            <p>${itemz.process}</p>
        </section>
    `;

    setupFavoriteButton(itemz.id);

} else {
    detailBoxz.innerHTML = "<p>Koleksi tidak ditemukan</p>";
}

function setupFavoriteButton(id) {
    const heroText = document.querySelector(".heroTextzz");
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) return;

    const favKey = `favKoleksi_${user.username}`;
    let favKoleksi = JSON.parse(localStorage.getItem(favKey)) || [];
    let isFav = favKoleksi.includes(id);

    const favBtn = document.createElement("div");
    favBtn.classList.add("favBtnzz");
    favBtn.innerHTML = `
        <p>Suka dengan karya ini? Tambahkan ke <span class="highlightzz">Favorit!</span></p>
        <br>
        <img src="assets/${isFav ? 'bookmarkFill.png' : 'bookmark.png'}" alt="favorit" id="favImgzz">
    `;

    heroText.appendChild(favBtn);

    favBtn.querySelector("#favImgzz").onclick = () => {
        if (isFav) {
            favKoleksi = favKoleksi.filter(item => item !== id);
            isFav = false;
        } else {
            favKoleksi.push(id);
            isFav = true;
        }
        localStorage.setItem(favKey, JSON.stringify(favKoleksi));
        favBtn.querySelector("#favImgzz").src = `assets/${isFav ? 'bookmarkFill.png' : 'bookmark.png'}`;
    };
}

