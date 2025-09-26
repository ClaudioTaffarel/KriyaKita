const paramsz = new URLSearchParams(window.location.search);
const idz = parseInt(paramsz.get("id"));
const itemz = koleksiz.find(k => k.id === idz);

const detailBoxz = document.getElementById("colDetailzz");

if (itemz) {
  detailBoxz.innerHTML = `
    <!-- HERO SECTION -->
    <div class="detailHerozz" style="background-image: url('${itemz.image}')">
      <div class="overlayzz"></div>
      <div class="heroTextzz">
        <h1>${itemz.name}</h1>
        <p>${itemz.originProvince} | ${itemz.originIsland}</p>
      </div>
      <img src="assets/blackFade.png" alt="fade" class="blackFadezz">
    </div>

    <!-- FILOSOFI SECTION -->
    <section class="filozz">
      <div class="filoContentzz">
        <div class="filoImgzz">
          <img src="${itemz.image}" alt="${itemz.name}">
        </div>
        <div class="filoTextzz">
          <h2>Filosofi</h2>
          <p>${itemz.philosophy}</p>
        </div>
      </div>
    </section>

    <!-- BAHAN & PROSES SECTION -->
    <section class="detailMorezz">
      <h2>Bahan</h2>
      <p>${itemz.materials}</p>
      <h2>Proses Pembuatan</h2>
      <p>${itemz.process}</p>
    </section>
  `;
} else {
  detailBoxz.innerHTML = "<p>Koleksi tidak ditemukan</p>";
}
