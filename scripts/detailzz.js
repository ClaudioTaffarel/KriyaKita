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
        </div>
            <img src="/assets/blackFade.png" alt="fade" class="blackFadezz">
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
} else {
    detailBoxz.innerHTML = "<p>Koleksi tidak ditemukan</p>";
}
