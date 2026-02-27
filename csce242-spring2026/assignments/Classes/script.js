// ==========================
// Song Class
// ==========================

class Song {
  constructor(title, artist, album, year, genre, coverArt, youtubeCode) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.genre = genre;
    this.coverArt = coverArt;
    this.youtubeCode = youtubeCode;
  }


  getCard(index) {
    return `
      <div class="song-card" data-index="${index}">
        <div class="song-head">
          <h3>${this.title}</h3>
          <p>By ${this.artist}</p>
        </div>
        <img class="song-cover" src="${this.coverArt}" alt="${this.title}">
      </div>
    `;
  }
}


const songs = [
  new Song(
    "Two-Headed Boy",
    "Neutral Milk Hotel",
    "Aeroplane Over the Sea",
    1998,
    "Folk Music",
    "images/Two.png",
    "ABCDEFG1234"
  ),
  new Song(
    "Jailhouse Rock",
    "Elvis Presley",
    "Jailhouse Rock",
    1957,
    "Rock & Roll",
    "images/Jailhouse.png",
    "gj0Rz-uP4Mk"
  ),
  new Song(
    "So What",
    "Miles Davis",
    "Kind of Blue",
    1959,
    "Jazz",
    "images/Sowhat.png",
    "ylXk1LBvIqU"
  ),
  new Song(
    "Jolene",
    "Dolly Parton",
    "Jolene",
    1973,
    "Country",
    "images/Jolene.png",
    "Ixrje2rXLMA"
  )
];


// ==========================
// Add Songs to Page
// ==========================

const gallery = document.getElementById("gallery");

for (let i = 0; i < songs.length; i++) {
  gallery.innerHTML += songs[i].getCard(i);
}


// ==========================
// Modal Elements
// ==========================

const modal = document.getElementById("modal");
const iframe = document.getElementById("modalIframe");
const modalTitle = document.getElementById("modalTitle");
const modalArtist = document.getElementById("modalArtist");
const modalAlbum = document.getElementById("modalAlbum");
const modalYear = document.getElementById("modalYear");
const modalGenre = document.getElementById("modalGenre");
const closeBtn = document.getElementById("closeBtn");


// ==========================
// Add Click Events to Cards
// ==========================

const cards = document.querySelectorAll(".song-card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {

    const index = this.getAttribute("data-index");
    const selectedSong = songs[index];

    // Fill modal with song data
    modalTitle.textContent = selectedSong.title;
    modalArtist.textContent = selectedSong.artist;
    modalAlbum.textContent = selectedSong.album;
    modalYear.textContent = selectedSong.year;
    modalGenre.textContent = selectedSong.genre;

    // Load YouTube video
    iframe.src = "https://www.youtube.com/embed/" + selectedSong.youtubeCode;

    // Show modal
    modal.style.display = "block";
  });
}


// ==========================
// Close Modal
// ==========================

// Close button
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  iframe.src = ""; // stop video
});

// Close if clicking outside modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
});