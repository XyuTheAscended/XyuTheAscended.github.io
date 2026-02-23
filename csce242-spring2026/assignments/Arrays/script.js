// Associative Arrays
const happy = {
    "Happy by Pharrell Williams": "https://www.youtube.com/embed/ZbZSe6N_BXs",
    "Don't Stop Me Now by Queen": "https://www.youtube.com/embed/HgzGwKwLmgM",
    "Can't Stop the Feeling by Justin Timberlake": "https://www.youtube.com/embed/ru0K8uYEZWw",
    "Don't Worry Be Happy by Bobby McFerrin": "https://www.youtube.com/embed/d-diB65scQU",
    "I'm Walking on Sunshine by Katrina & The Waves": "https://www.youtube.com/embed/iPUmE-tne5U"
};

const sad = {
    "Happier Than Ever by Billie Eilish": "https://www.youtube.com/embed/5GJWxDKyk3A",
    "Someone You Loved by Lewis Capaldi": "https://www.youtube.com/embed/zABLecsR5UE",
    "Someone Like You by Adele": "https://www.youtube.com/embed/hLQl3WQQoQ0",
    "Fix You by Coldplay": "https://www.youtube.com/embed/k4V3Mo61fJM",
    "Hurt by Johnny Cash": "https://www.youtube.com/embed/8AHCfZTRGiI"
};

const moodSelect = document.getElementById("moodSelect");
const songsDiv = document.getElementById("songs");
const videoDiv = document.getElementById("video");
const frame = document.getElementById("youtubeFrame");

moodSelect.addEventListener("change", loadSongs);

function loadSongs() {

    const mood = moodSelect.value;

    songsDiv.innerHTML = "";
    videoDiv.style.display = "none";
    frame.src = "";

    let selectedArray;

    if (mood === "happy") {
        selectedArray = happy;
    } else if (mood === "sad") {
        selectedArray = sad;
    } else {
        return;
    }

    for (let song in selectedArray) {

        const link = document.createElement("a");
        link.textContent = song;

        link.addEventListener("click", function() {
            playVideo(selectedArray[song]);
        });

        songsDiv.appendChild(link);
    }
}

function playVideo(url) {
    frame.src = url;
    videoDiv.style.display = "block";
}